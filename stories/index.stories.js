import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import DileAppDrawer from '../src/DileAppDrawer.js';
import '../src/dile-app-drawer.js';

import readme from '../README.md';

storiesOf('dile-app-drawer', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(DileAppDrawer), { notes: { markdown: readme } })
  .add(
    'Alternative Header',
    () => html`
      <dile-app-drawer .header=${'Something else'}></dile-app-drawer>
    `,
  );
