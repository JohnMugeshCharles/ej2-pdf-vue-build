import PDFdefault from './pdf/default.vue'; 
import PDFjobapplication from './pdf/job-application.vue'; 
import PDFhelloworld from './pdf/hello-world.vue'; 
import PDFrtltext from './pdf/rtl-text.vue'; 
import PDFbulletsandlists from './pdf/bullets-and-lists.vue'; 
import PDFtextflow from './pdf/text-flow.vue'; 
import PDFshapes from './pdf/shapes.vue'; 
import PDFimageinsertion from './pdf/image-insertion.vue'; 
import PDFextractimage from './pdf/extract-image.vue'; 
import PDFextracttext from './pdf/extract-text.vue'; 
import PDFdigitalsignature from './pdf/digital-signature.vue'; 
import PDFredaction from './pdf/redaction.vue'; 
import PDFdocumentsettings from './pdf/document-settings.vue'; 
import PDFpagesettings from './pdf/page-settings.vue'; 
import PDFlayers from './pdf/layers.vue'; 
import PDFannotations from './pdf/annotations.vue'; 
import PDFformfillings from './pdf/form-fillings.vue'; 
import PDFbookmarks from './pdf/bookmarks.vue'; 
import PDFmergedocuments from './pdf/merge-documents.vue'; 
import PDFsplitpdf from './pdf/split-pdf.vue'; 
import PDFwatermarkpdf from './pdf/watermark-pdf.vue'; 
import PDFrearrangepages from './pdf/rearrange-pages.vue'; 
export default [{path: '/', redirect: '/tailwind3/pdf/default.html'},{ path: '/:theme/pdf/default.html', component: PDFdefault, meta: {"eCompName":"PDF","eSampleName":"Default","eCategoryName":"PDF"} }
,{ path: '/:theme/pdf/job-application.html', component: PDFjobapplication, meta: {"eCompName":"PDF","eSampleName":"Job Application","eCategoryName":"PRODUCT SHOWCASE"} }
,{ path: '/:theme/pdf/hello-world.html', component: PDFhelloworld, meta: {"eCompName":"PDF","eSampleName":"Hello World","eCategoryName":"GETTING STARTED"} }
,{ path: '/:theme/pdf/rtl-text.html', component: PDFrtltext, meta: {"eCompName":"PDF","eSampleName":"RTL Text","eCategoryName":"DRAWING TEXT"} }
,{ path: '/:theme/pdf/bullets-and-lists.html', component: PDFbulletsandlists, meta: {"eCompName":"PDF","eSampleName":"Bullets And List","eCategoryName":"DRAWING TEXT"} }
,{ path: '/:theme/pdf/text-flow.html', component: PDFtextflow, meta: {"eCompName":"PDF","eSampleName":"Text Flow","eCategoryName":"DRAWING TEXT"} }
,{ path: '/:theme/pdf/shapes.html', component: PDFshapes, meta: {"eCompName":"PDF","eSampleName":"Shapes","eCategoryName":"GRAPHICS"} }
,{ path: '/:theme/pdf/image-insertion.html', component: PDFimageinsertion, meta: {"eCompName":"PDF","eSampleName":"Image Insertion","eCategoryName":"GRAPHICS"} }
,{ path: '/:theme/pdf/extract-image.html', component: PDFextractimage, meta: {"eCompName":"PDF","eSampleName":"Extract Image","eCategoryName":"IMPORT AND EXPORT"} }
,{ path: '/:theme/pdf/extract-text.html', component: PDFextracttext, meta: {"eCompName":"PDF","eSampleName":"Extract Text","eCategoryName":"IMPORT AND EXPORT"} }
,{ path: '/:theme/pdf/digital-signature.html', component: PDFdigitalsignature, meta: {"eCompName":"PDF","eSampleName":"Digital Signature","eCategoryName":"SECURITY"} }
,{ path: '/:theme/pdf/redaction.html', component: PDFredaction, meta: {"eCompName":"PDF","eSampleName":"Redaction","eCategoryName":"SECURITY"} }
,{ path: '/:theme/pdf/document-settings.html', component: PDFdocumentsettings, meta: {"eCompName":"PDF","eSampleName":"Document Settings","eCategoryName":"SETTINGS"} }
,{ path: '/:theme/pdf/page-settings.html', component: PDFpagesettings, meta: {"eCompName":"PDF","eSampleName":"Page Settings","eCategoryName":"SETTINGS"} }
,{ path: '/:theme/pdf/layers.html', component: PDFlayers, meta: {"eCompName":"PDF","eSampleName":"Layers","eCategoryName":"SETTINGS"} }
,{ path: '/:theme/pdf/annotations.html', component: PDFannotations, meta: {"eCompName":"PDF","eSampleName":"Annotations","eCategoryName":"USER INTERACTIONS"} }
,{ path: '/:theme/pdf/form-fillings.html', component: PDFformfillings, meta: {"eCompName":"PDF","eSampleName":"Form Fillings","eCategoryName":"USER INTERACTIONS"} }
,{ path: '/:theme/pdf/bookmarks.html', component: PDFbookmarks, meta: {"eCompName":"PDF","eSampleName":"Bookmarks","eCategoryName":"USER INTERACTIONS"} }
,{ path: '/:theme/pdf/merge-documents.html', component: PDFmergedocuments, meta: {"eCompName":"PDF","eSampleName":"Merge Documents","eCategoryName":"MODIFY DOCUMENTS"} }
,{ path: '/:theme/pdf/split-pdf.html', component: PDFsplitpdf, meta: {"eCompName":"PDF","eSampleName":"Split PDF","eCategoryName":"MODIFY DOCUMENTS"} }
,{ path: '/:theme/pdf/watermark-pdf.html', component: PDFwatermarkpdf, meta: {"eCompName":"PDF","eSampleName":"Watermark PDF","eCategoryName":"MODIFY DOCUMENTS"} }
,{ path: '/:theme/pdf/rearrange-pages.html', component: PDFrearrangepages, meta: {"eCompName":"PDF","eSampleName":"Rearrange Pages","eCategoryName":"MODIFY DOCUMENTS"} }
];