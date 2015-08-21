# angular-form-preselect
Angular directive that render a select tag with defined values plus a special value (typically 'other...') that if selected convert the select field to an input text.

When in text mode press the 'esc' button to return to the select mode.

**Example:**

```html
<ng-form-preselect 
  name="test"
  options="['1','2','3']"
  other="'other...'"
  placeholder="'insert your text'"
  on-change="demo.onChange(value)"
  required="true></ng-form-preselect>
```

**Attributes**

`name - string`: then field's name

`options - array of string`: then array options to show on select field

`other - string`: the other value to add at the bottom of the options list

`placeholder - string`: the placeholder list to show on text field

`on-change - ref`: the parent scope function to call on value change (both select and text mode)

`required - boolean`: same as the `ng-required` attributes on fields

