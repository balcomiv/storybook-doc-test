import { DocButtonComponent } from '../app/doc-button/doc-button.component';

export default {
  title: 'DocButton',
  component: DocButtonComponent,
  parameters: { docs: { iframeHeight: 120 } },
};

export const basic = () => ({
  component: DocButtonComponent,
  props: {
    label: 'Docs Test',
  },
});
