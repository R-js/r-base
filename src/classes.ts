const preprocessor = [
    'matrix',
    'list',
    'array',
    'data.frame',
    'numeric_version',
    'package_version',
    'POSIXlt',
    'POSIXct',
    'POSIXt',
    'numeric',
    'qr',
    'character',
    'file',
    'difftime',
    'vector',
    'character',
    'raw',
    'AsIs',
    'factor',
    'integer',
    'complex',
    'logical',
    'ts',
    'noquote',
    'environment',
    'Date',
    'formula',
    'qr',
    'lm',
    'error',
    'glm'
]
.map(s=>({ o:s, v:s.replace(/(\.([A-Za-z]))/,a => a[1].toUpperCase())}))
.sort()
.filter((f,i,arr) => arr.indexOf(f,i+1) === -1)
.forEach(s => console.log(`export const ${s.v} = Symbol.for('${s.o}');`))
