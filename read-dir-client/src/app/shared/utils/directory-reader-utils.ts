export function getFileExtention(row: any) {
  const list = row.name?.split('.');
  switch (row.type) {
    case 'file':
      return list && list.length > 1 ? list.pop().toUpperCase() ?? '' : '';
    case 'directory':
      return 'Folder';
    default:
      return '';
  }
}
