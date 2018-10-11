# BASE


### operators

|` list of operators`|
|--------|
|`base::[[`|
|`base::::`|
|`base::%%`|
|`base::&&`|
|`base::{`|
|`base::|`|
|`base::~`|
|`base::[`|
|`base::^`|
|`base::!`|
|`base::$`|
|`base::&`|
|`base::(`|
|`base::*`|
|`base::+`|
|`base::-`|
|`base::/`|
|`base:::`|
|`base::<`|
|`base::=`|
|`base::>`|
|`base::<-`|
|`base::<=`|
|`base::==`|
|`base::>=`|
|`base::if`
|`base::||`|
|`base::!=`|
|`base::[<-.`|
|`base::[[.`|
|`base::[[<-`|


### language
```R
base::<<-
base::is.na<-.default
base::R.version.string
base::as.single.default
base::@<-
base::identical
base::nargs
base::is.R
base::bitwNot
base::is.primitive
base::version
base::print.warnings
base::simpleWarning
base::double
base::print
base::forceAndCall
base::testPlatformEquivalence
base::contributors
base::unix.time
base::print.Dlist # print description list
base::Find
base::all.equal.envRefClass
base::bitwXor
base::Map
base::Mod
base::objects
base::search
base::is.infinite
base::getSrcLines
base::dQuote
base::bquote
base::builtins
base::length<-
base::format.summaryDefault
base::all.equal.numeric
base::registerS3method
base::environmentName
base::environment<-
base::as.call
base::with
base::emptyenv
base::[.AsIs
base::comment<-
base::seq_len
base::numeric
base::formatDL #format descriptionlists
base::mostattributes<-
base::data.class
base::memCompress
base::make.names #example make.names(c("a and b", "a-and-b"), unique = TRUE)
base::as.null
base::storage.mode
base::is.nan
base::class
base::length<-.factor
base::pretty.default
base::open.srcfilealias
base::identity
base::print.summaryDefault
base::extSoftVersion
base::open.srcfile
base::all.equal.default
base::summary
base::packageStartupMessage
base::sys.save.image
base::invisible
base::open.srcfile
base::Recall
base::load
base::R.version # S compatibility
base::R.Version
base::within.list
base::inherits
base::comment
base::|.hexmode
base::setequal
base::typeof
base::seq
base::try
base::mget
base::Sys.info
base::xor
base::%in%
base::capabilities
base::geterrmessage
base::delayedAssign
base::range
base::getRversion
base::structure
base::mode
base::&.octmode
base::parent.env<-
base::as.environment
base::environment
base::split #Divide into Groups and Reassemble
base::asS3
base::asS4
base::with.default 
base::args
base::srcfile
base::tryCatch
base::attr
base::next #same as continue in for/do/while loops
base::union
base::invokeRestart #condition system
base::bitwOr
base::bindtextdomain # translate text messages
base::ifelse #if else construct  example: sqrt(ifelse(x >= 0, x, NA))  # no warning
base::is.atomic #object is atomic or recursive
base::body # manipulate the body of a function
base::body<-
base::rep.int
base::local #evaluate an "expression class"
base::expression #creates Unevaluated Expressions, it has class "expression"
base::Reduce #FP "reduce"
base::Negate
base::is.expression
base::deparse  # expression deparsing
base::sys.parent
base::call
base::is.object
base::attributes<-
base::[.hexmode
base::bitwShiftR
base::bitwShiftL
base::RNGversion #older version of .RNGKind
base::withVisible
base::print.AsIs
base::Filter
base::single
base::attr.all.equal
base::dontCheck
base::all.equal.list
base::formals<-
base::as.function.default
base::is.finite
base::is.na
base::duplicated
base::print.octmode
base::summary.proc_time
base::stopifnot
base::force
base::format
base::NextMethod
base::Vectorize # like "arrayrify" or "multiplex"
base::is.numeric
base::Im #(give imaginary part of a complex number)
base::Re
base::packageHasNamespace
base::is.na<-
base::is.name #alias for is.symbol
base::as.name #alias for as.symbol
base::as.symbol
base::is.symbol
base::I
base::registerS3methods
base::c
base::F
base::T
base::as.logical
base::browser
base::is.double
base::new.env
base::while
base::complex
base::environmentIsLocked
base::Sys.getenv
base::Ops.factor
base::as.complex
base::all.equal.environment
base::as.double
base::findPackageEnv #find objects in package base_
base::getNamespaceImports
base::match.arg
base::all.names #get tokens(expr) from an expression_
base::enquote #quote expressions_
base::|.octmode #octal mode?_
base::warning #warning message_
base::match.fun #extract function by name_
base::format.AsIs #note:"AsIs" is a class , format an R object , pretty print_
base::is.integer
base::as.integer
base::as.single #double single precision vectors_
base::is.function
base::l10n_info #report localisation information_
base::integer
base::pcre_config #find conversion of strings to/from encoding_
base::parent.frame
base::Position
base::isNamespace
base::lockBinding #locking functions to environments_
base::message #simple diagnostic messages_
base::all.equal.language
base::attr<-
base::asNamespace
base::eval
base::do.call
base::getNamespaceName
base::all.equal
base::round
base::quote #no real counterpart in JS, its an expression, but not evaluated
#Example:
   v <- quote(1+1)
   2+eval(v)
   #-> [1] 4 

base::interaction
#Example:
> interaction(f23,f32, drop=F)
[1] 1.1 1.2 1.3 2.4 2.5
Levels: 1.1 2.1 1.2 2.2 1.3 2.3 1.4 2.4 1.5 2.5
> interaction(f23,f32, drop=T)
[1] 1.1 1.2 1.3 2.4 2.5
Levels: 1.1 1.2 1.3 2.4 2.5
```

### specials
```
base::trigamma
base::lbeta
base::beta
base::lgamma
base::gamma
base::digamma
base::factorial
base::lfactorial
base::besselI
base::besselJ
base::besselK
base::besselY
```

### version string management
```R
base::regmatches<-
base::as.package_version  
base::unique.default
base::unique.numeric_version
base::package_version
base::c.numeric_version
base::anyNA.numeric
base::xtfrm.numeric_version
base::is.na.numeric_version
base::.decode_numeric_version
base::format.numeric_version
base::print.numeric_version
base::Summary.numeric_version
base::is.na<-.numeric_version
base::[.numeric_version
base::as.list.numeric_version
base::Ops.numeric_version
base::R_system_version
base::as.character.numeric_version
base::$.package_version
base::$.package_version
base::[<-.numeric_version
base::[[<-.numeric_version
base::.make_numeric_version
base::duplicated.numeric
base::numeric_version
base::as.data.frame.numeric_version
base::as.numeric_version
base::[[.numeric_version
base::is.package_version
base::is.numeric_version
base::rep.numeric_version
base::evalq
```

### subsetting, like [ but different 
```R
base::subset.default
base::subset
base::.subset2
base::subset.matrix
base::subset.data.frame
```

### utf8ToInt
```R
base::utf8ToInt
```

### date and time classes POSIXt POSIXct POSIXlt 
```R
base::weekdays
base::Sys.time
base::julian
base::quarters
base::Sys.timezone
base::Ops.POSIXt
base::as.POSIXlt.default
base::length.POSIXlt
base::as.Date.POSIXct
base::as.Date.POSIXlt
base::weekdays.POSIXt
base::[.POSIXct
base::[.POSIXlt
base::as.POSIXct.default
base::mean.POSIXct
base::as.POSIXct.POSIXlt
base::mean.POSIXlt
base::format.POSIXct
base::format.POSIXlt
base::Math.POSIXt
base::xtfrm.POSIXct
base::xtfrm.POSIXlt
base::as.POSIXlt.numeric
base::diff.POSIXt
base::is.numeric.POSIXt
base::anyNA.POSIXlt
base::julian.POSIXt
base::cut.POSIXt
base::as.POSIXlt.Date
base::[[.POSIXct
base::[[.POSIXlt
base::as.POSIXlt.POSIXct
base::unique.POSIXlt
base::as.list.POSIXct
base::as.list.POSIXlt
base::round.POSIXt
base::duplicated.POSIXlt
base::months.POSIXt
base::+.POSIXt
base::-.POSIXt
base::as.character.POSIXt
base::quarters.POSIXt
base::summary.POSIXct
base::summary.POSIXlt
base::as.matrix.POSIXlt
base::as.POSIXct
base::as.POSIXlt
base::is.na.POSIXlt
base::rep.POSIXct
base::rep.POSIXlt
base::seq.POSIXt
base::as.double.POSIXlt
base::as.POSIXlt.character
base::trunc.POSIXt
base::all.equal.POSIXt
base::sort.POSIXlt
base::print.POSIXct
base::print.POSIXlt
base::length<-.POSIXct
base::length<-.POSIXlt
base::names.POSIXlt
base::Summary.POSIXct
base::Summary.POSIXlt
base::c.POSIXct
base::c.POSIXlt
base::as.data.frame.POSIXct
base::as.data.frame.POSIXlt
base::as.POSIXlt.factor
base::names<-.POSIXlt
base::as.POSIXct.numeric
base::[<-.POSIXct
base::[<-.POSIXlt
base::as.POSIXct.Date
base::split.POSIXct
```

### run length encoding (rle)

```R
base::inverse.rle
# x <- rev(rep(6:10, 1:5))
#rle(x)
# -> lengths [1:5]  5 4 3 2 1
# -> values  [1:5] 10 9 8 7 6
```

### base::memory.profile
```R
> memory.profile()
       NULL      symbol    pairlist     closure environment     promise
          1        7753      146453        3041        1079        6845
   language     special     builtin        char     logical     integer
      38286          45         680        9087        5467       26210
     double     complex   character         ...         any        list
       1292           1       39089           0           0       11843
 expression    bytecode externalptr     weakref         raw          S4
          2        9505        1397         430         439         871
```

### lapack

```R
base::La_version #lapack version_  
```

### QR decomposition
```R
base::chol # lapack routine dpstrf
base::is.qr
base::chol2inv #inverse from choleski decomp
base::qr.Q  #reconstruct Q part of QR decomposition from `qr` object_
base::qr.R  #reconstruct R part of QR decomposition from `qr` object_
base::qr.X
base::qr.coef
base::qr.default
base::qr.qy
base::qr.fitted
base::qr.qty
base::qr.resid
base::qr.solve #same as solve(qr)_
base::qr
# Examples:
# A <- matrix(runif(12), 3)
# b <- 1:3
# qr.solve(A, b)
# -> [1]  8.456735  4.233530 -5.860061  0.000000
# solve(qr(A, LAPACK = TRUE), b)
# ->[1]  8.456735  4.233530 -5.860061  0.000000
base::solve.qr
base::solve.default
base::backsolve   #wrapper for the level-3 BLAS routine 'dtrsm'.
base::forwardsolve  #wrapper for the level-3 BLAS routine 'dtrsm'.
```

### Xapply  
```R
base::rapply #recursive version of lapply
base::lapply
base::apply
base::vapply
base::sapply
base::mapply
base::tapply
base::eapply
```

### io
```R
base::read.dcf
base::showConnections
base::print.function
base::file.mtime
base::setwd
base::getwd
base::as.expression
base::summary.srcfile
base::close.srcfilealias
base::isIncomplete
base::source
base::readRenviron
base::textConnection
base::file.mode
base::file.info
base::xzfile
base::writeChar
base::readline
base::Sys.glob
base::stdin
base::readLines
base::dir
base::pushBackLength
base::lazyLoadDBexec
base::close
base::save.image
base::Sys.setFileTime
base::stderr
base::flush
base::unz
base::url
base::dirname
base::oldClass<- #S-PLUS  legacy?
base::print.simple.list
base::file.access
base::stdout
base::print.default
base::print.connection
base::basename
base::file.append
base::socketConnection
base::getConnection
base::write
base::close.connection
base::sys.source #parse and evaluate expressions from a file
base::clearPushBack #push text back to a connection
base::readChar
base::file
base::file.create
base::isatty
base::file.remove
base::list.dirs
base::truncate
base::file.rename
base::truncate.connection
base::gzfile
base::open.connection
base::writeBin
base::flush.connection
base::isSeekable
base::tempdir
base::open
base::fifo
base::summary.connection
base::file.choose
base::closeAllConnections
base::file.exists
base::socketSelect
base::dget
base::getAllConnections
base::pipe
base::print.hexmode #print numbers in hex_
base::file.path
base::memDecompress #compress or decompress in memory#
base::lazyLoad #lazyload R objects#
base::file.symlink
base::dput #write object to file#
base::tempfile #create named temporary file#
base::mode<- #storage mode of an R object#
base::rawConnection
base::Sys.umask
base::gzcon
base::ls #show directory entries#
base::readBin #read binary data#
base::dump #text representation of R objects#
base::unlink #deletes files#
base::file.copy #copy a file#
base::browserText #browser related, not a "browser" here is a user-feedback-console, like a prompt#
```

### internal
```R
base::sys.load.image
base::getOption
base::options
base::.Options
base::.cache_class
base::.POSIXct
base::.POSIXlt
base::lazyLoadDBfetch
base::.difftime
base::.doSortWrap #only user-visible because of the special nature of the base namespace_
base::.NotYetImplemented
base::.mapply
base::.noGenerics
base::.getRequiredPackages2
base::.OptRequireMethods
base::.makeMessage
base::.packages
base::.amatch_costs
base::.readRDS
base::.External.graphics
base::.rowNamesDF<-
base::.maskedMsg
base::.colSums
base::.Primitive
base::.saveRDS
base::.S3PrimitiveGenerics
base::.AutoloadEnv
base::.Devices
base::.userHooksEnv
base::.Library
base::.ArgsEnv
base::.popath
base::.format.zeros #auxiliary function of 'prettyNum()'  re-formats the zeros in a vector 'x' of formatted numbers_
base::.C_R_getTaskCallbackNames
base::.detach
base::.getRequiredPackages
base::.doWrap
base::.col
base::.F_dchdc
base::.isMethodsDispatchOn
base::.mergeExportMethods
base::.primTrace
base::.Machine
base::.rowMeans
base::.Call
base::.expand_R_libs_env_var
base::.mergeImportMethods
base::.knownS3Generics
base::.deparseOpts
base::.row
base::.standard_regexps
base::regexpr
base::regexec
base::.__H__.rbind
base::.signalSimpleWarning
base::.External2
base::.Date
base::.rowSums
base::.methodsNamespace
base::.NotYetUsed
base::.First.sys
base::.First.sys
base::.F_dqrqy
base::.F_dqrxb
base::.F_dqrcf
base::.Last.value
base::.find.package
base::.getNamespace
base::.F_dqrqty
base::.getNamespace
base::.getNamespace
base::.isOpen
base::.F_dqrrsd
base::.Traceback
base::.Library.site
base::.packageStartupMessage
base::.Call.graphics
base::.C_R_addTaskCallback
base::.amatch_bounds
base::.S3_methods_table
base::.row_names_info
base::.F_dqrdc2
base::.leap.seconds
base::.C_R_removeTaskCallback
base::.libPaths
base::.getNamespaceInfo
base::.primUntrace
base::.colMeans
base::.dynLibs
base::...length
base::.__H__.cbind
base::.External
base::.BaseNamespaceEnv
base::.Internal
base::.Fortran
base::.TAOCP1997init
base::..deparseOpts
base::.path.package
base::.GenericArgsEnv
base::.F_dtrco
base::.kronecker
base::.traceback
base::.bincode
base::.Deprecated
base::.doSortWrap
base::.rmpkg
base::.Platform
base::.__S3MethodsTable__.
base::...elt
base::.Script
base::.doTrace
base::.Device
base::.tryResumeInterrupt
base::.valid.factor
base::.Defunct
base::.set_row_names #prolly an internal
base::.C
base::.encode_numeric
base::.handleSimpleError
base::.GlobalEnv
base::.gt
base::.gtn
```

#### difftime
```R
base::units.difftime
base::xtfrm.difftime
base::as.double.difftime
base::length<-.difftime
base::units<-.difftime
base::*.difftime
base::diff.difftime
base::c.difftime
base::format.difftime
base::Math.difftime
base::[.difftime
base::as.difftime
base::mean.difftime
base::print.difftime
base::difftime
base::Ops.difftime
base::as.data.frame.difftime
base::/.difftime
base::is.numeric.
base::Summary.difftime
```

### data.frames
```R
base::expand.grid
base::merge
base::unique #extract unique elements unique(c(1,2,2,3)) -> 1,2,3
base::merge.default  #merge 2 data frames
base::row.names.default
base::duplicated.default
base::print.by
base::as.data.frame.matrix #_coerce matrix to a data.frame_
base::dimnames.data.frame
base::xpdrows.data.frame
base::transform.data.frame
base::is.data.frame
base::as.data.frame.default
base::as.data.frame.data.frame
base::by.data.frame
base::print.data.frame
base::merge.data.frame
base::Summary.
base::is.na.data.frame
base::as.data.frame.vector
base::as.data.frame.table
base::as.list.data.frame
base::cbind.data.frame
base::rowsum.data.frame
base::Ops.data.frame
base::summary.
base::as.data.frame.character
base::[<-.data.frame
base::data.frame
base::$<-.data.frame
base::duplicated.data.frame
base::as.data.frame
base::anyDuplicated.data.frame
base::as.data.frame.raw
base::as.data.frame.AsIs
base::split.data.frame
base::row.names.data.frame
base::dimnames<-.data.frame
base::Math.data.frame
base::[[<-.data.frame
base::as.data.frame.factor
base::[.data.frame
base::as.data.frame.model.matrix
base::unique.data.frame
base::within.data.frame
base::row.names<-.data.frame
base::as.data.frame.ordered
base::dim.data.frame
base::t.data.frame
base::as.data.frame.integer
base::[[.data.frame
base::as.data.frame.Date
base::split<-.data.frame
base::droplevels.data.frame
base::as.data.frame.list
base::as.data.frame.numeric
base::$.data.frame
base::as.data.frame.complex
base::rbind.data.frame
base::as.data.frame.logical
base::as.data.frame.ts
base::format.data.frame
base::as.data.frame.noquote
```

### aux
```R
base::LETTERS
base::parse #'parse' returns the parsed but unevaluated expressions in a list._
base::by #Function 'by' is an object-oriented wrapper for 'tapply' applied to data frames._
base::gc #garbage collection_
base::gl #Generate factors by specifying the pattern of their levels._
base::match #same as %in%_
```

### sorting
```R
base::order #sort data_
base::sort #alias of order_
base::sort.list
base::sort.int
base::sort.default
base::is.unsorted
```

### list
```R
base::is.table
base::as.list.default
base::as.list.environment
base::as.list.function
base::pairlist
base::attributes
base::as.list.factor #S3 method "factor" -> "list" 
base::[.simple.list
base::is.list
base::unlist
base::is.recursive #is an object list like or atomic_
base::as.function #convert object(list) to a function_
base::replicate #replicate is a wrapper for the common use of sapply_
```

### array (vector, matrix, array, table)
```R
base::margin.table
base::duplicated.matrix
base::append
base::mat.or.vec
base::tanpi
base::prmatrix
base::dimnames
base::chol.default
base::anyDuplicated.default
base::rep.factor
base::outer
base::as.table
base::xtfrm.Surv
base::rowsum.default
base::tcrossprod
base::crossprod
base::all
base::as.numeric
base::any
base::col
base::det
base::dim
base::anyDuplicated.matrix
base::rowSums
base::summary.table
base::list
base::rownames<-
base::max.col
base::unique.matrix
base::rep
base::rev #reverse elements
base::row
base::rev.default
base::as.matrix.noquote
base::svd
base::upper.tri
base::isSymmetric.matrix
base::dim<-
base::droplevels
base::determinant.matrix
base::rowMeans
base::matrix
base::ncol
base::lower.tri
base::rbind
base::cbind
base::diag<-
base::scale.default
base::row.names<-
base::aperm.table #array transposition
base::norm #compute norm of an array
base::isSymmetric
base::sweep
base::nrow
base::[.table
base::colnames
base::labels
base::labels.default
base::rcond
base::print.summary.table
base::NCOL
base::rep_len
base::colnames<-
base::names<-
base::prop.table
base::replace
base::slice.index
base::diag
base::sequence #run `seq\_len` over a vector of values_
base::provideDimnames
base::t.default #matrix transpose_
base::NROW #number of rows in an array_
base::summary.matrix
base::La.svd #svd decomposition (la=lapack)_
base::prod #product of vectors_
base::drop #delete dimensions that have only 1 level_
base::eigen #spectral decomposition of matrix_
base::colMeans
base::t
base::unique.array
base::as.data.frame.array
base::arrayInd
base::which
base::duplicated.
base::anyDuplicated.array
base::names
base::which
### example
# which(LETTERS == "R")
# which(ll <- c(TRUE, FALSE, TRUE, NA, FALSE, FALSE, TRUE)) #> 1 3 7
# names(ll) <- letters[seq(ll)]
# which(ll)
# which((1:12)%%2 == 0) # which are even?
# which(1:10 > 3, arr.ind = TRUE)

base::simplify2
base::as.array
base::is.array
base::as.array.default
base::aperm #array transposition_
base::aperm.default
base::kronecker #kronecker product on arrays_
base::as.matrix.data.frame
```

### math
```R
base::Arg
base::set.seed
base::jitter
base::unclass # remove class attributes
base::cummax
base::cummin
base::asinh
base::cumsum
base::[<-
base::format.pval
base::atan2
base::atanh
base::which.min
base::which.max
base::abs
base::cos
base::exp
base::is.complex
base::RNGkind
base::pmax.int
base::max
base::floor
base::min
base::log2
base::sin
base::acos
base::tan
base::sum
base::mean
base::asin
base::log10
base::log1p
base::trunc
base::cosh
base::cospi
base::ceiling
base::pi
base::pmin #vector based min_
base::pmin.int
base::pmax
base::cumprod #cummulative sum, products and extremes_
base::mean.default
base::setdiff
base::is.element
base::polyroot
base::RNGversion
```

### dates
```R
base::sinpi
base::units
base::month.abb
base::months
base::month.name #built in constants_
base::split.Date
base::Summary.Date
base::rep.Date
base::diff.Date
base::is.numeric.Date
base::as.list.Date
base::length<-.Date
base::c.Date
base::ISOdate
base::-.Date
base::weekdays.Date
base::cut.Date
base::seq.Date
base::round.Date
base::mean.Date
base::as.Date.default
base::months.Date
base::as.Date.numeric
base::Sys.Date
base::print.Date
base::julian.Date
base::Math.Date
base::Ops.Date
base::as.Date.character
base::[.Date
base::format.Date
base::summary.
base::as.Date.factor
base::+.Date
base::xtfrm.Date
base::as.character.Date
base::quarters.Date
base::date
base::ISOdatetime
base::as.Date
base::trunc.Date
```

### string
```R
base::sprintf
base::split<-
base::abbreviate
base::grepl
base::&.hexmode
base::character
base::seq.int
base::storage.mode<-
base::gregexpr
base::ngettext
base::gettext
base::rawToChar
base::format.factor
base::sQuote
base::nchar
base::strptime
base::agrepl
base::substring<-
base::substr<-
base::agrep
base::Encoding<-
base::charToRaw
base::cat
base::is.raw
base::charmatch
base::rawShift
base::toString.default
base::strtrim
base::print.summary.warnings
base::log
base::rawToBits
base::gettextf
base::format.info
base::raw
base::paste0 #concat strings
base::intToUtf8
base::rle
base::sub # pattern match and replacement
base::!.octmode
base::is.character
base::intToBits
base::validUTF8
base::Sys.setlocale
base::shQuote
base::as.character
base::endsWith
base::format.hexmode
base::Sys.getlocale
base::unserialize
base::serialize
base::trimws
base::validEnc
base::encodeString
base::prettyNum
base::strwrap
base::tolower
base::iconv
base::packBits
base::strrep
base::substr
base::strtoi
base::toupper
base::paste
base::startsWith
base::as.character.hexmode
base::letters
base::Encoding
base::regmatches
base::substring
base::nzchar
base::as.raw
base::toString
```

### statistical helpers
```R
base::rank #ranking of numbers_
#example 
#
# x=c(1,1.5,1.5,2,2.8)
# rank(x)
#-> [1] 1.0 2.5 2.5 4.0 5.0
base::xtfrm.AsIs
base::xtfrm.factor
```

### condition number of a matrix
```R
base::kappa.qr
base::kappa.lm
base::kappa.default
base::kappa
base::.kappa_tri
```

### conditioning
```R
base::restartDescription
base::as.character.condition
base::simpleCondition
base::conditionMessage
base::as.character.error
base::withCallingHandlers
```

### logicals
```R
base::as.logical.factor
base::isTRUE
```

### factors 
### levels
```R
base::[.factor
base::as.factor
base::cut
base::[[.factor
base::Summary.factor
base::droplevels.factor
base::is.factor
base::levels<-.factor
base::Math.factor
base::cut.default
base::is.na<-.factor
base::ordered
base::all.equal.factor
base::levels
base::is.ordered
base::levels.default
base::factor
base::nlevels
base::Summary.ordered
base::as.ordered
base::levels<-
base::summary.factor
```

### functions still needing to put in their categories (io, langauge, array, etc)

```R
-->stop()
base::R.home
base::exists
base::substitute
base::data.matrix
base::all.equal.formula
base::determinant
base::print.noquote
base::by.default
base::Ops.ordered
base::getNamespace
base::conditionMessage.condition
base::as.character.octmode
base::browserSetDebug
base::parent.env
base::print.listof
base::interactive
base::unname
base::remove
base::sample
base::getNamespaceVersion
base::removeTaskCallback
base::scale
base::textConnectionValue
base::transform
base::lchoose
base::is.call
base::row.names
base::[.octmode
base::print.factor
base::switch
base::getElement
base::lengths
base::dimnames<-
base::save
base::function
base::is.single
base::default.stringsAsFactors
base::pmatch
base::withRestarts
base::scan
base::is.null
base::sink.number
base::pretty
base::library.dynam.unload
base::browserCondition
base::dir.exists
base::print.srcref
base::casefold
base::anyNA
base::suppressWarnings
base::seek
base::is.language
base::get0
base::as.vector
base::strftime
base::readRDS
base::split<-.default
base::is.pairlist
base::chartr
base::isFALSE
base::as.pairlist
base::as.octmode
base::length
base::formals
base::rawConnectionValue
base::Sys.chmod
base::formatC
base::sign
base::sinh
base::sink
base::all.equal.character
base::unsplit
base::as.hexmode
base::is.environment
base::list2env
base::globalenv
base::list.files
base::loadingNamespaceInfo
base::packageEvent
base::make.unique
base::logical
base::as.vector.factor
base::noquote
base::as.qr
base::class<-
base::suppressPackageStartupMessages
base::as.null.default
base::summary.warnings
base::file.show
base::bindingIsLocked
base::acosh
base::bzfile
base::intersect
base::summary.srcref
base::units<-
base::withAutoprint
base::as.table.default
base::getDLLRegisteredRoutines.character
base::gctorture2
base::Conj
-->stop()
base::normalizePath
base::addNA
base::is.matrix
base::[<-.factor
base::writeLines
base::colSums
base::saveRDS
base::suppressMessages
base::[[<-.factor
base::$.DLLInfo
base::%*%
base::undebug
base::$<-
base::%/%
base::tanh
base::is.loaded
base::curlGetHeaders
base::sqrt
base::sample.int
base::grep
base::is.logical
base::print.proc_time
base::Sys.readlink
base::strsplit
base::Cstack_info
base::dir.create
base::aperm
base::xtfrm
base::gsub
base::stop
base::unloadNamespace
base::grouping
base::seek.connection
base::as.matrix.default
base::%o%
base::eval.parent
base::%x%
base::pushBack
base::transform.default
base::srcfilecopy
base::restartFormals
base::print.rle
base::format.octmode
base::conditionCall.condition
base::as.matrix
base::enc2utf8
base::sys.function
base::print.DLLInfo
base::UseMethod
base::write.dcf
base::split
base::match.call
base::sys.calls
base::char.expand
base::signif
base::file.link
base::diff.default
base::dyn.load
base::expm1
base::is.vector
base::iconvlist
base::chkDots
base::library
base::path.package
base::proc.time
base::table
base::enc2native
base::debug
base::OlsonNames
base::isOpen
base::grepRaw
base::rowsum
base::as.list
base::topenv
base::system.file
base::repeat
base::as.character.factor
base::print.table
base::lockEnvironment
base::xtfrm.default
base::mem.limits
base::all.vars
base::format.default
base::choose
base::as.expression.default
base::within
base::bitwAnd
base::tabulate
base::c.noquote
base::check_tzones
base::file.size
base::makeActiveBinding
base:::::
base::findInterval
base::all.equal.raw
base::parseNamespaceFile
base::icuSetCollate
base::Sys.localeconv
base::conditionCall
base::!.hexmode


































































































```