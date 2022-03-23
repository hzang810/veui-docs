export default {
  schedule: '*',
  'region-picker': '*',
  embedded: '*',
  '*': {
    props: [
      'ui',
      'name',
      'invalid',
      'overlayClass',
      'overlayStyle',
      'overlayPriority',
      'keyField'
    ]
  },
  button: {
    props: ['value']
  },
  cascader: {
    emits: ['toggle']
  },
  checkbox: {
    props: ['model']
  },
  radio: {
    props: ['model']
  },
  switch: {
    props: ['model']
  },
  drawer: {
    props: ['inline']
  },
  select: {
    props: ['max'] // 脚本没识别出来，先忽略
  },
  link: {
    props: ['replace']
  }
}
