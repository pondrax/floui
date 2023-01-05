const toVal = (mix: any) => {
  var k, y, str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

export const clsx = (...args: any[]) => {
  let i = 0, tmp, x, str = '';
  while (i < args.length) {
    if (tmp = args[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x
      }
    }
  }
  return str;
}

export const prfx = (prefix: string, obj: any) => {
  const aliases = {
    tiny: 'xs',
    small: 'sm',
    medium: 'md',
    large: 'lg',
    extra: 'xl'
  }

  Object.keys(obj).forEach(k => {
    const key = k as keyof typeof aliases;
    const val = obj[key]
    if (aliases[key]) {
      obj[`btn-${aliases[key]}`] = val
      // obj[`${prefix}-${aliases[key]}`] = val
      delete (obj[aliases[key]])
    } else {
      obj[`btn-${key}`] = val
      obj[`${prefix}-${key}`] = val
      delete (obj[key])
    }
  })
  obj[prefix] = true
  return obj;
}