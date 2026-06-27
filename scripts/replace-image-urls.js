const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components');

const imageMap = {
  // Peaks
  '/images/peak-1.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
  '/images/peak-2.jpg': 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop',
  '/images/peak-3.jpg': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
  
  // Jackets
  '/images/card-thumbnail.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  '/images/jacket-main.png': 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop',
  '/images/mens-outfit-bg.jpg': 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop',
  '/images/mens-outfit-cutout.png': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=800&auto=format&fit=crop',
  '/images/jacket-yellow.png': 'https://images.unsplash.com/photo-1559160581-447185bd17db?q=80&w=800&auto=format&fit=crop',
  '/images/womens-outfit-bg.jpg': 'https://images.unsplash.com/photo-1520208496220-4f51e064ec0d?q=80&w=800&auto=format&fit=crop',
  '/images/womens-outfit-cutout.png': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  '/images/jacket-red.png': 'https://images.unsplash.com/photo-1605797305943-34e2c9ef89fc?q=80&w=800&auto=format&fit=crop',
  
  // Shoes
  '/images/step-on-up-hero.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
  '/images/polaroid-1.jpg': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=600&auto=format&fit=crop',
  '/images/polaroid-2.jpg': 'https://images.unsplash.com/photo-1515248107779-7a5413346d1b?q=80&w=600&auto=format&fit=crop',
  '/images/polaroid-3.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop',
  '/images/card-thumbnail-grip.jpg': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
  '/images/shoe-main.png': 'https://images.unsplash.com/photo-1626245367123-5e92618fc817?q=80&w=800&auto=format&fit=crop',
  '/images/mens-shoe-outfit-bg.jpg': 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop',
  '/images/mens-shoe-cutout.png': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=800&auto=format&fit=crop',
  '/images/shoe-khaki.png': 'https://images.unsplash.com/photo-1515248107779-7a5413346d1b?q=80&w=800&auto=format&fit=crop',
  '/images/womens-shoe-outfit-bg.jpg': 'https://images.unsplash.com/photo-1520208496220-4f51e064ec0d?q=80&w=800&auto=format&fit=crop',
  '/images/womens-shoe-cutout.png': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  '/images/shoe-purple.png': 'https://images.unsplash.com/photo-1626245367123-5e92618fc817?q=80&w=800&auto=format&fit=crop',
  
  // Backpacks
  '/images/outdoor-spirit-bg.jpg': 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop',
  '/images/backpack-flowers.jpg': 'https://images.unsplash.com/photo-1539185966-200922896da3?q=80&w=800&auto=format&fit=crop',
  '/images/backpack-rock.jpg': 'https://images.unsplash.com/photo-1622240954932-9ce280599bb8?q=80&w=800&auto=format&fit=crop',
  '/images/hikers-walking-away-landscape.jpg': 'https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=1200&auto=format&fit=crop',
  '/images/card-thumbnail-capacity.jpg': 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  '/images/backpack-main.png': 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop',
  '/images/backpack-outfit-bg.jpg': 'https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop',
  '/images/backpack-outfit-cutout.png': 'https://images.unsplash.com/photo-1539185966-200922896da3?q=80&w=800&auto=format&fit=crop',
  '/images/backpack-red.png': 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop',
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [local, remote] of Object.entries(imageMap)) {
    if (content.includes(`src="${local}"`)) {
      content = content.replace(new RegExp(`src="${local}"`, 'g'), `src="${remote}"`);
      // some components have objects that are supposed to be transparent.
      // Unsplash images are solid, so we should add rounded corners if it's an object-contain item.
      content = content.replace(/className="object-contain(.*?)"/g, 'className="object-cover rounded-[16px]$1"');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
