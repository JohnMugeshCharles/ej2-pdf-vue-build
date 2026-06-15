<template>
  <div class="card">
    <p class="description">
      Please note that Adobe Reader or its equivalent is required to view the resultant document.
    </p>

    <div class="form-group">
      <ejs-textbox 
        id="name" 
        v-model="formData.name" 
        placeholder="John Milton" 
        floatLabelType="Auto"
      ></ejs-textbox>
    </div>
    <div class="form-group">
      <ejs-dropdownlist 
        id="gender" 
        v-model="formData.gender" 
        :dataSource="genderOptions"
        :fields="{ text: 'text', value: 'value' }"
        placeholder="Gender"
        floatLabelType="Auto"
      ></ejs-dropdownlist>
    </div>
    <div class="form-group">
      <ejs-datepicker 
        id="dob" 
        v-model="formData.dob" 
        placeholder="Date of Birth"
        floatLabelType="Auto"
      ></ejs-datepicker>
    </div>
    <div class="form-group">
      <ejs-textbox 
        id="email" 
        v-model="formData.email" 
        placeholder="Email ID" 
        floatLabelType="Auto"
      ></ejs-textbox>
    </div>
    <div class="form-group">
      <ejs-dropdownlist 
        id="state" 
        v-model="formData.state" 
        :dataSource="stateOptions"
        :fields="{ text: 'text', value: 'value' }"
        placeholder="Coming from"
        floatLabelType="Auto"
      ></ejs-dropdownlist>
    </div>
    <div class="form-group">
      <div class="inline">
        <ejs-checkbox 
          id="newsletter" 
          v-model="formData.newsletter" 
          label="Would you like to receive our Newsletter?"
        ></ejs-checkbox>
      </div>
    </div>

    <div class="btn-row">
      <ejs-button id="btnViewTemplate" @click="viewPdf" :isPrimary="false">View Template</ejs-button>
      <ejs-button id="btnFillForm" @click="() => fillPdf('fill')" :isPrimary="true">Fill Form</ejs-button>
      <ejs-button id="btnFillFlatten" @click="() => fillPdf('flatten')" :isPrimary="false">Fill And Flatten</ejs-button>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates how to fill and flatten the form fields to personalize your PDF document.It is also possible to create, edit, flatten, and delete the form fields using the JavaScript PDF Library.
      </p>
    </div>

    <div id="description">
      <p>More information about the forms can be found in this documentation <a href="https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/formfields">section</a>.</p>
    </div>
  </div>
</template>
<style scoped>
  .card {
    padding: 20px 0px;
    max-width: none;
    margin: 0 auto;
  }
  .form-group { 
    margin-bottom: 20px; 
  }
  .inline { 
    display: flex; 
    align-items: center; 
    gap: 8px; 
    margin-top: 4px; 
  }
  .btn-row { 
    display: flex; 
    gap: 12px; 
    margin-top: 14px; 
    flex-wrap: wrap; 
  }
</style>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';
import {
  PdfDocument,
  PdfForm,
  PdfTextBoxField,
  PdfCheckBoxField,
  PdfListFieldItem,
  PdfComboBoxField,
  PdfRadioButtonListField
} from '@syncfusion/ej2-pdf';

export default defineComponent({
  name: 'FormFillings',
  components: {
    'ejs-textbox': TextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent,
    'ejs-datepicker': DatePickerComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  setup() {
    const formData = reactive({
      name: 'John Milton',
      gender: 'Male',
      dob: new Date('2012-12-05'),
      email: 'john.milton@example.com',
      state: 'Alabama',
      newsletter: false
    });

    const genderOptions = [
      { text: 'Male', value: 'Male' },
      { text: 'Female', value: 'Female' },
      { text: 'Other', value: 'Other' }
    ];

    const stateOptions = [
      { text: 'Alabama', value: 'Alabama' },
      { text: 'Alaska', value: 'Alaska' },
      { text: 'Arizona', value: 'Arizona' },
      { text: 'Arkansas', value: 'Arkansas' },
      { text: 'California', value: 'California' }
    ];

    let viewBusy = false;
    let fillBusy = false;

    const fillPdf = async (mode: 'fill' | 'flatten'): Promise<void> => {
      if (fillBusy) return;
      fillBusy = true;
      try {
        const pdfBytes = await fetchAsUint8Array('https://cdn.syncfusion.com/content/pdf-resources/form-filling-document.pdf');
        const values = getFormValues();
        const pdf = new PdfDocument(pdfBytes as any);
        const form = (pdf as any).form as PdfForm;

        const nameField = findByName(form, 'name') as PdfTextBoxField | undefined;
        if (nameField) {
          nameField.text = values.name;
          nameField.setAppearance(true);
        }

        const gender = findByName(form, 'gender') as PdfRadioButtonListField | undefined;
        if (gender) {
          switch (values.gender) {
              case 'Male': gender.selectedIndex = 0; break;
              case 'Female': gender.selectedIndex = 1; break;
              case 'Other': gender.selectedIndex = 2; break;
            }
          gender.setAppearance(true);
        }

        const dobField = findByName(form, 'dob') as PdfTextBoxField | undefined;
        if (dobField) {
          dobField.text = values.dob;
          dobField.setAppearance(true);
        }

        const emailField = findByName(form, 'email') as PdfTextBoxField | undefined;
        if (emailField) {
          emailField.text = values.email;
          emailField.setAppearance(true);
        }

        const state = findByName(form, 'state') as PdfComboBoxField | undefined;
        if (state) {
          switch (values.state) {
            case 'Alabama':
              state.selectedIndex = 0;
              break;
            case 'Alaska':
                state.selectedIndex = 1;
                break;
            case 'Arizona':
                state.selectedIndex = 2;
                break;
            case 'Arkansas':
                state.selectedIndex = 3;
                break;
            case 'California':
                state.selectedIndex = 4;
                break;
          }
          state.setAppearance(true);
        }

        const newsField = findByName(form, 'newsletter') as PdfCheckBoxField | undefined;
        if (newsField) {
          newsField.checked = values.newsletter;
          newsField.setAppearance(true);
        }

        if (mode === 'flatten') {
          (pdf as any).flatten = true;
        }

        (pdf as any).save(mode === 'flatten' ? 'FormFillFlatten.pdf' : 'FormFillings.pdf');
        (pdf as any).destroy();
      } catch (err) {
        console.error(err);
        alert('Failed to fill the PDF.');
      } finally {
        fillBusy = false;
      }
    };

    const downloadBlob = (blob: Blob, fileName: string): void => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    const viewPdf = async (): Promise<void> => {
      if (viewBusy) return;
      viewBusy = true;
      try {
        const pdfBytes = await fetchAsUint8Array('https://cdn.syncfusion.com/content/pdf-resources/form-filling-document.pdf');
        downloadBlob(new Blob([pdfBytes], { type: 'application/pdf' }), 'FormFillings.pdf');
      } catch (err) {
        console.error(err);
        alert('Failed to load the PDF.');
      } finally {
        viewBusy = false;
      }
    };

    const getFormValues = () => {
      const dobDate = formData.dob;
      const dob = dobDate instanceof Date 
        ? `${String(dobDate.getMonth() + 1).padStart(2, '0')}/${String(dobDate.getDate()).padStart(2, '0')}/${dobDate.getFullYear()}`
        : '';
      
      return {
        name: formData.name || '',
        gender: (formData.gender as 'Male' | 'Female' | 'Other') || 'Male',
        dob,
        email: formData.email || '',
        state: formData.state || '',
        newsletter: !!formData.newsletter
      };
    };

    const findByName = (form: PdfForm, name: string) => {
      for (let i = 0; i < (form as any).count; i++) {
        const field = (form as any).fieldAt(i);
        if (field && field.name === name) return field;
      }
      return undefined;
    };

    return {
      formData,
      genderOptions,
      stateOptions,
      viewPdf,
      fillPdf
    };
  }
});

async function fetchAsUint8Array(url: string): Promise<Uint8Array> {
  const res = await fetch(url, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  const buf = await res.arrayBuffer();
  return new Uint8Array(buf);
}
</script>