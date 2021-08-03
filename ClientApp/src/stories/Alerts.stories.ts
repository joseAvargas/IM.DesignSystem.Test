import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import  {NgbAlertsComponent}  from '../app/ngb-Components/ngb-alerts/ngb-alerts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export default {
  title: 'Components/Alerts',
  component: NgbAlertsComponent,
  decorators: [
    moduleMetadata({
      declarations: [NgbAlertsComponent],
      imports: [CommonModule, NgbModule],
    }),
  ],

} as Meta;

const Template: Story<NgbAlertsComponent> = (args: NgbAlertsComponent) => ({
  props: args,
});

export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
