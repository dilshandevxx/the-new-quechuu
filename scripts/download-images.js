const fs = require('fs');
const path = require('path');
const https = require('https');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create the directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Map of filenames to Unsplash image URLs
const imageMap = {
  // Hero & General
  'hero-bg.jpg': 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2000&auto=format&fit=crop',
  'video-thumb.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  
  // Peaks
  'peak-1.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
  'peak-2.jpg': 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop',
  'peak-3.jpg': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
  
  // Jackets
  'card-thumbnail.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  'jacket-main.png': 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop',
  'mens-outfit-bg.jpg': 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop',
  'mens-outfit-cutout.png': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=800&auto=format&fit=crop',
  'jacket-yellow.png': 'https://images.unsplash.com/photo-1559160581-447185bd17db?q=80&w=800&auto=format&fit=crop',
  'womens-outfit-bg.jpg': 'https://images.unsplash.com/photo-1520208496220-4f51e064ec0d?q=80&w=800&auto=format&fit=crop',
  'womens-outfit-cutout.png': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  'jacket-red.png': 'https://images.unsplash.com/photo-1605797305943-34e2c9ef89fc?q=80&w=800&auto=format&fit=crop',
  
  // Shoes
  'step-on-up-hero.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
  'polaroid-1.jpg': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=600&auto=format&fit=crop',
  'polaroid-2.jpg': 'https://images.unsplash.com/photo-1515248107779-7a5413346d1b?q=80&w=600&auto=format&fit=crop',
  'polaroid-3.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop',
  'card-thumbnail-grip.jpg': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
  'shoe-main.png': 'https://images.unsplash.com/photo-1626245367123-5e92618fc817?q=80&w=800&auto=format&fit=crop',
  'mens-shoe-outfit-bg.jpg': 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop',
  'mens-shoe-cutout.png': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=800&auto=format&fit=crop',
  'shoe-khaki.png': 'https://images.unsplash.com/photo-1515248107779-7a5413346d1b?q=80&w=800&auto=format&fit=crop',
  'womens-shoe-outfit-bg.jpg': 'https://images.unsplash.com/photo-1520208496220-4f51e064ec0d?q=80&w=800&auto=format&fit=crop',
  'womens-shoe-cutout.png': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  'shoe-purple.png': 'https://images.unsplash.com/photo-1626245367123-5e92618fc817?q=80&w=800&auto=format&fit=crop',
  
  // Backpacks
  'outdoor-spirit-bg.jpg': 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop',
  'backpack-flowers.jpg': 'https://images.unsplash.com/photo-1539185966-200922896da3?q=80&w=800&auto=format&fit=crop',
  'backpack-rock.jpg': 'https://images.unsplash.com/photo-1622240954932-9ce280599bb8?q=80&w=800&auto=format&fit=crop',
  'hikers-walking-away-landscape.jpg': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=1200&auto=format&fit=crop',
  'card-thumbnail-capacity.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  'backpack-main.png': 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop',
  'backpack-outfit-bg.jpg': 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop',
  'backpack-outfit-cutout.png': 'https://images.unsplash.com/photo-1539185966-200922896da3?q=80&w=800&auto=format&fit=crop',
  'backpack-red.png': 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop',
};

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return resolve(downloadFile(response.headers.location, dest));
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
      
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(dest)}`);
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

async function downloadAll() {
  console.log(`Downloading ${Object.keys(imageMap).length} images to ${imagesDir}...`);
  for (const [filename, url] of Object.entries(imageMap)) {
    const dest = path.join(imagesDir, filename);
    if (fs.existsSync(dest)) {
      console.log(`Skipping ${filename}, already exists.`);
      continue;
    }
    try {
      await downloadFile(url, dest);
    } catch (err) {
      console.error(`Error downloading ${filename}: ${err.message}`);
    }
  }
  console.log('All downloads finished.');
}

downloadAll();
