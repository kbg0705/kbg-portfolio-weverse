import { decisionSupportDetail } from './details/decisionSupport';
import { magicEcoleDetail } from './details/magicEcole';
import { metaverseDetail } from './details/metaverse';
import { printbankDetail } from './details/printbank';
import { printStudioDetail } from './details/printStudio';
import { taxCanvasDetail } from './details/taxCanvas';

export const projectDetails = [
  printbankDetail,
  magicEcoleDetail,
  taxCanvasDetail,
  printStudioDetail,
  decisionSupportDetail,
  metaverseDetail,
];

export const findProjectDetail = (slug?: string) => projectDetails.find((detail) => detail.slug === slug);
