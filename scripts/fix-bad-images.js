const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'components');

const badIds = [
  '1520208496220-4f51e064ec0d',
  '1605797305943-34e2c9ef89fc',
  '1501555088652-0cb8bf7801a2',
  '1515248107779-7a5413346d1b',
  '1626245367123-5e92618fc817',
  '1539185966-200922896da3',
  '1622240954932-9ce280599bb8'
];

const goodIds = [
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

let goodIndex = 0;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const badId of badIds) {
    if (content.includes(badId)) {
      const goodId = goodIds[goodIndex % goodIds.length];
      content = content.replace(new RegExp(badId, 'g'), goodId);
      changed = true;
      goodIndex++;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
