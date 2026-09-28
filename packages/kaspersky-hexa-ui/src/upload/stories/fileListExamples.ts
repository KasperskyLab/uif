import type { UploadFile } from '../types'

const kb = 1024
const mb = 1024 * kb

export const fileError: UploadFile = {
  error: 'Upload failed. Try again',
  name: 'malware-sample.zip',
  size: 4 * mb,
  status: 'error',
  uid: 'file-error'
}

export const fileUploading: UploadFile = {
  name: 'events.csv',
  percent: 45,
  size: 12 * mb,
  status: 'uploading',
  uid: 'file-uploading'
}

export const fileSelected: UploadFile = {
  name: 'notes.txt',
  size: 18 * kb,
  uid: 'file-selected'
}

export const fileDone: UploadFile = {
  name: 'policy.xml',
  size: 96 * kb,
  status: 'done',
  uid: 'file-done'
}

export const fileSuccess: UploadFile = {
  name: 'screenshot.png',
  size: 860 * kb,
  status: 'success',
  uid: 'file-success'
}

export const statusFileList: UploadFile[] = [
  fileError,
  fileUploading,
  fileSelected,
  fileDone,
  fileSuccess
]

export const longNameFile: UploadFile = {
  name: 'quarterly-consolidated-endpoint-protection-policy-report-for-central-northwestern-and-volga-federal-district-branches-with-exceptions-register-and-attachments.pdf',
  size: 2 * mb,
  status: 'done',
  uid: 'file-long-name'
}

export const downloadableFile: UploadFile = {
  name: 'backup.tar',
  size: 48 * mb,
  status: 'done',
  uid: 'file-downloadable',
  url: 'https://example.com/backup.tar'
}

export const overflowFileList: UploadFile[] = Array.from({ length: 10 }, (_, index) => ({
  name: `attachment-${String(index + 1).padStart(2, '0')}.pdf`,
  size: (index + 1) * 120 * kb,
  status: 'done',
  uid: `overflow-${index + 1}`
}))

export const oversizedFileList: UploadFile[] = [
  {
    name: 'large-dump.bin',
    size: 500 * mb,
    status: 'done',
    uid: 'file-oversized'
  },
  fileDone
]

export const zeroSizeFile: UploadFile = {
  name: 'empty.dat',
  size: 0,
  status: 'done',
  uid: 'file-zero-size'
}

export const longErrorFile: UploadFile = {
  error: 'The server rejected the file because the digital signature does not match the expected certificate chain',
  name: 'import-failed.json',
  size: 32 * kb,
  status: 'error',
  uid: 'file-long-error'
}

export const uploadingWithoutPercentFile: UploadFile = {
  name: 'scan-results.log',
  size: 640 * kb,
  status: 'uploading',
  uid: 'file-uploading-no-percent'
}

export const singleDoneFileList: UploadFile[] = [fileDone]

export const longNameFileList: UploadFile[] = [longNameFile, fileDone]

export const progressFileList: UploadFile[] = [fileUploading, uploadingWithoutPercentFile]

export const downloadableFileList: UploadFile[] = [downloadableFile, fileSuccess]

export const maxCountFileList: UploadFile[] = [fileDone, fileSuccess, fileError]

export const longErrorFileList: UploadFile[] = [longErrorFile]

export const zeroSizeFileList: UploadFile[] = [zeroSizeFile]

export const uploadingWithoutPercentFileList: UploadFile[] = [uploadingWithoutPercentFile]

export const filesWithoutDescription: UploadFile[] = [fileDone, fileError]
