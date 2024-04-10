const PROJECT_CODE_LEN = 10
const FILE_NAME_LEN = 20
const UPLOAD_BATCH_SIZE = 32
const DELETE_BATCH_SIZE = UPLOAD_BATCH_SIZE
const GCS_HOST = 'https://storage.googleapis.com'
const ALLOWED_FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']

const ProjectTypes = Object.freeze({
  CLASSIFICATION: 'CLASSIFICATION',
  OBJECT_DETECTION: 'OBJECT_DETECTION',
  SEGMENTATION: 'SEGMENTATION',
})

const ProjectCodePrefixes = Object.freeze({
  CLASSIFICATION: 'clf',
  OBJECT_DETECTION: 'obj',
  SEGMENTATION: 'seg',
})

const UploadTypes = Object.freeze({
  MULTIPLE: 0,
  FOLDER: 1,
})

const DatasetTypes = Object.freeze({
  IMAGE_DIRECTORY: 'IMAGE_DIRECTORY',
  TFRECORD: 'TFRECORD',
  YOLOV8: 'YOLOV8',
})

const ExperimentStatuses = Object.freeze({
  PROCESSING: 'PROCESSING',
  DONE: 'DONE',
  STOPPED: 'STOPPED',
})

export {
  PROJECT_CODE_LEN,
  FILE_NAME_LEN,
  GCS_HOST,
  UPLOAD_BATCH_SIZE,
  DELETE_BATCH_SIZE,
  ALLOWED_FILE_EXTENSIONS,
  ProjectTypes,
  ProjectCodePrefixes,
  UploadTypes,
  DatasetTypes,
  ExperimentStatuses,
}
