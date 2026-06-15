<template>
  <div>
    <div class="control-section">
      <div class="tablediv" style="font-size:14px">
        <text class="rowdiv">
          Click the button to extract the text from the PDF document using JavaScript PDF Library.
        </text>
        <div class="tablediv" style="font-size:14px">
          <div class="rowdiv">
            <div class="celldiv">
              <table style="width:100%">
                <tbody>
                  <tr>
                    <td align="left">
                      <br />
                      <button id="viewtemplatebtn" style="width: 150px; text-transform:capitalize">View Template</button>
                      <button id="normalbtn" style="width: 150px; text-transform:capitalize; margin-left: 8px">Extract Text</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="action-description" style="margin-top: 10px">
      <p>This sample demonstrates <a href="https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/text-extraction">how to extract text from the PDF document</a>.</p>
    </div>

    <div id="description" style="margin-top: 10px">
      <p>
        This feature can be used to extract information such as user data, billing information from invoice, address,
        and so on from the PDF document for indexing and archiving.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfDocument } from '@syncfusion/ej2-pdf';
import { PdfDataExtractor } from '@syncfusion/ej2-pdf-data-extract';

export default defineComponent({
  name: 'ExtractTextPdf',
  setup() {
    onMounted(() => {
      const viewBtn = new Button();
      viewBtn.appendTo('#viewtemplatebtn');
      const extractBtn = new Button();
      extractBtn.appendTo('#normalbtn');

      extractBtn.element.onclick = async (): Promise<void> => {
        try {
          // Fetch the sample PDF bytes from the remote URL
          const pdfBytes = await readFromPdfResources(templateURL);
          // Create a PdfDocument instance from the fetched bytes
          const pdf = new PdfDocument(pdfBytes);
          // Create a PdfDataExtractor bound to the PdfDocument
          const extractor = new PdfDataExtractor(pdf);
          // Extract text across the full page range:
          const text: string = extractor.extractText({ startPageIndex: 0, endPageIndex: pdf.pageCount - 1 });
          // Destroy the document instance
          pdf.destroy();
          downloadBlob(new Blob([text], { type: 'text/plain' }), 'Sample.txt');
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Extract Text failed:', err);
        }
      };

      viewBtn.element.onclick = async (): Promise<void> => {
        try {
          const pdfBytes = await readFromPdfResources(templateURL);
          downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), 'PDF_Succinctly.pdf');
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('View Template failed:', err);
        }
      };
    });

    return {};
  }
});

const templateURL = 'https://cdn.syncfusion.com/content/pdf-resources/pdf-succinctly.pdf';

async function readFromPdfResources(url: string): Promise<Uint8Array> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch PDF: ${res.status} ${res.statusText}`);
  }
  const buf = await res.arrayBuffer();
  return new Uint8Array(buf);
}

function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
</script>