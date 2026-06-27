const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components');

const unsplashIds = [
  '1522199755839-a2bacb67c546',
  '1551632811-561732d1e306',
  '1464822759023-fed622ff2c3b',
  '1454496522488-7a8e488e8606',
  '1519681393784-d120267933ba',
  '1544022613-e87ca75a784a',
  '1465311440653-ba9b1d9b0f5b',
  '1520250497591-112f2f40a3f4',
  '1555529733-0e670560f7e1'
];

let idx = 0;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Find all remaining /images/ matches
  const regex = /src="\/images\/[^"]+"/g;
  if (regex.test(content)) {
    content = content.replace(regex, (match) => {
      const id = unsplashIds[idx % unsplashIds.length];
      idx++;
      return `src="https://images.unsplash.com/photo-${id}?q=80&w=800&auto=format&fit=crop"`;
    });
    // Add rounded corners for object-contain since unsplash images are not cutouts
    content = content.replace(/className="object-contain(.*?)"/g, 'className="object-cover rounded-[16px]$1"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
