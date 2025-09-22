export interface Icon {
  name: string;
  type?: string;
  path?: string;
  alt?: string;
}

export interface CompressedType {
  label: string;
  value: string;
  description?: string;
}

export const ICONS: Icon[] = [
  {
    name: 'folder',
    type: 'directory',
    path: 'assets/icons/folder.svg',
    alt: 'Folder icon'
  },
  {
    name: 'draft',
    type: 'file',
    path: 'assets/icons/file.svg',
    alt: 'File icon'
  },
  {
    name: 'pdf',
    type: 'pdf',
    path: 'assets/icons/pdf.svg',
    alt: 'PDF file icon'
  },
  {
    name: 'image',
    type: 'image',
    path: 'assets/icons/image.svg',
    alt: 'Image file icon'
  },
  {
    name: 'folder_zip',
    type: 'zipped_folder',
    path: 'assets/icons/image.svg',
    alt: 'Zipped / Compresed Folder'
  }
];

export const COMPRESSED_TYPES: CompressedType[] = [
  {
    label: 'ZIP File',
    value: 'zip',
    description: 'Compressed ZIP archive'
  },
  {
    label: 'Tar File',
    value: 'tar',
    description: 'Compressed TAR archive'
  },
  {
    label: '7z File',
    value: '7z',
    description: 'Compressed 7z archive'
  },
];
