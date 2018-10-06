# BASE

## operators
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
|`base::if`|


### S3 routing of as.matrix to data.frame class
base::as.matrix.data.frame

### TRUE
base::F 

### Inhibit conversion
base::I

### create S3 methods
base::registerS3methods

### logical TRUE
base::T

### collection
base::c

### quit
base::q

### transpose
base::t

### Not Applicable, return the value of a named object
base::dynGet

### Not Applicable
base::as.single  

### looks like multiplex
base::interaction
```R
> interaction(f23,f32, drop=F)
[1] 1.1 1.2 1.3 2.4 2.5
Levels: 1.1 2.1 1.2 2.2 1.3 2.3 1.4 2.4 1.5 2.5
> interaction(f23,f32, drop=T)
[1] 1.1 1.2 1.3 2.4 2.5
Levels: 1.1 1.2 1.3 2.4 2.5
```

### special function gamma
base::gamma

### version string management
returns class `["package_version", "numeric_version"]`
base::as.package_version  
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
base::.encode_numeric
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

### not applicable
base::.GlobalEnv

### Not applicable (symbols are mappings to functions (and other things) stored in dll)
base::getNativeSymbolInfo

### to work with R source file, not applicable
base::print.srcfile

### missing value indicator (different then NULL)
base::is.na<- "not avaiable" 

### namespace support, not to be called directly in R
base::packageHasNamespace

base::!=

### The condition system
base::.handleSimpleError

### xtfrm is a form of ranking , assign ordinal values to elements
base::xtfrm.AsIs

### fetch columnnames from matrices, dataframes, not vectors, not lists
looks weird, check out what do.NULL and `prefix` do here
base::colnames<-

### prompts for a file name, ?
base::file.choose

### function to work with streams, files, sockets, urls, whatever
base::summary.connection

### make a call to compiled code
base::.C

### subsetting, like [ but different 
base::subset.default
base::subset
base::.subset2
base::subset.matrix
base::subset.data.frame

### utf8ToInt
_convert utf8 to utf32_
base::utf8ToInt

#### base::baseenv _meaningless in javascript_
#### base::.set_row_names _prolly an internal

### POSIXt date time is represented by named components like `year`, `month`,`day`, `hour`, etc
Note that POSIXlt and POSIXct are wrappers around a common class POSIXt  
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

#### * base::quote no real counterpart in JS, its an expression, but not evaluated
Example:
```R
   v <- quote(1+1)
   2+eval(v)
   #-> [1] 4 
```

### run length encoding (rle)
base::inverse.rle
# x <- rev(rep(6:10, 1:5))
#     rle(x)
#     ## lengths [1:5]  5 4 3 2 1
#     ## values  [1:5] 10 9 8 7 6


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

base::La_version _lapack version_  

### Options
We dont do globals!
base::getOption
base::options
base::.Options
base::.cache_class
base::.POSIXct
base::.POSIXlt

### complex Numbers
base::Im (give imaginary part of a complex number)
base::Re

### QR decomposition

* base::qr.Q  _reconstruct Q part of QR decomposition from `qr` object_
* base::qr.R  _reconstruct R part of QR decomposition from `qr` object_
* base::qr.X
* base::qr.coef
* base::qr.default
* base::qr.qy
* base::qr.fitted
* base::qr.qty
* base::qr.resid
* base::qr.solve _same as solve(qr)_

```R
> A <- matrix(runif(12), 3)
> b <- 1:3
> qr.solve(A, b)
[1]  8.456735  4.233530 -5.860061  0.000000
> solve(qr(A, LAPACK = TRUE), b)
[1]  8.456735  4.233530 -5.860061  0.000000
```
* base::solve.qr
* base::solve.default
* base::backsolve   wrapper for the level-3 BLAS routine 'dtrsm'.
* base::forwardsolve  wrapper for the level-3 BLAS routine 'dtrsm'.

### Xapply  
base::rapply recursive version of lapply
base::lapply
base::apply
base::vapply
base::sapply
base::mapply
base::tapply
base::eapply


### not need in JS

base::require
base::library.dynam
base::unique.warnings
base::ls show directory entries
base::rm remove identifier from environment

### internal
base::.difftime
base::.doSortWrap _only user-visible because of the special nature of the base namespace_
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
base::.gt
base::.Library
base::.ArgsEnv
base::.popath
base::.format.zeros _auxiliary function of 'prettyNum()'  re-formats the zeros in a vector 'x' of formatted numbers_
base::.C_R_getTaskCallbackNames
base::.detach
base::.kappa_tri
base::.getRequiredPackages
base::.doWrap
base::.col
base::.F_dchdc
base::.isMethodsDispatchOn


### evaluate R expression
base::evalq

### difftime

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

### JS Symbol equivalent
base::is.name alias for is.symbol
base::as.name alias for as.symbol


### data frames
base::as.data.frame.matrix __coerce matrix to a data.frame_
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

### aux
base::LETTERS
base::parse _'parse' returns the parsed but unevaluated expressions in a list._
base::by _Function 'by' is an object-oriented wrapper for 'tapply' applied to data frames._
base::gc _garbage collection_
base::gl _Generate factors by specifying the pattern of their levels._

### sorting
base::order _sort data_
base::sort _alias of order_
base::sort.list
base::sort.int
base::sort.default
base::is.unsorted

### array
base::unique.array
base::as.data.frame.array
base::arrayInd
base::duplicated.
base::anyDuplicated.array
base::
base::simplify2
base::as.array
base::is.array
base::as.array.default


     which(LETTERS == "R")
     which(ll <- c(TRUE, FALSE, TRUE, NA, FALSE, FALSE, TRUE)) #> 1 3 7
     names(ll) <- letters[seq(ll)]
     which(ll)
     which((1:12)%%2 == 0) # which are even?
     which(1:10 > 3, arr.ind = TRUE)












base::pi
base::gzcon
base::qr


base::paste
base::match


base::rank
base::||
base::seq.default
base::startsWith
base::[<-.Date

base::aperm.default
base::kronecker
base::traceback
base::as.character.hexmode
base::simpleError
base::warnings

base::kappa.qr
base::isNamespace
base::attr<-
base::colMeans

base::asNamespace

base::quit
base::kappa.lm
base::setSessionTimeLimit
base::find.package

base::eval

base::split.Date
base::readChar
base::autoloader

base::untracemem
base::Encoding
base::debuggingState

base::do.call

base::regmatches<-

base::levels.default
base::computeRestarts
base::readBin
base::[[<-

base::sys.call

base::path.expand
base::fifo
base::substitute
base::data.matrix
base::all.equal.formula
base::as.logical.factor
base::file
base::srcfilealias
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
base::close.srcfile



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
base::Summary.Date
base::library.dynam.unload
base::letters

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
base::rep.Date
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


base::is.numeric.Date
base::all.equal.character
base::unsplit
base::as.hexmode
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
base::[[.Date
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
base::kappa.default
base::as.list.Date

base::getDLLRegisteredRoutines.character

base::gctorture2
base::Conj
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
base::nlevels
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
base::diff.Date
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

base::length<-.Date

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
base::bitwAnd
base::tabulate


base::c.noquote
base::check_tzones
base::file.size

base::makeActiveBinding
base:::::

base::c.Date
base::findInterval
base::all.equal.raw
base::parseNamespaceFile
base::icuSetCollate

base::Sys.localeconv
base::conditionCall
base::!.hexmode
base::margin.table
base::<<-
base::sprintf
base::duplicated.matrix


base::read.dcf
base::names
base::append
 
base::mat.or.vec

base::is.na<-.default
base::split<-
base::R.version.string
base::tanpi
base::namespaceExport

base::prmatrix
base::as.single.default
base::expand.grid

base::dimnames
base::@<-

base::kappa
base::identical
base::chol.default


base::gctorture
base::missing
base::abbreviate
base::showConnections
base::merge
base::nargs
base::is.R
base::Sys.sleep
base::reg.finalizer
base::isdebugged

base::anyDuplicated.default

base::rep.factor
base::zapsmall
base::outer
base::print.function


base::ISOdate

base::isS4
base::isBaseNamespace

base::Arg
base::file.mtime
base::setwd


base::bitwNot

base::getwd
base::list2env
base::set.seed

base::is.primitive
base::grepl


base::trigamma
base::&.hexmode
base::character


base::returnValue


base::version

base::jitter
base::isNamespaceLoaded
base::print.warnings
base::simpleWarning
base::double

base::as.expression
base::summary.srcfile

base::debugonce
base::print

base::[.listof
base::forceAndCall
base::close.srcfilealias
base::.gtn
base::testPlatformEquivalence
base::.mergeExportMethods
base::.primTrace
base::seq.int
base::storage.mode<-
base::gregexpr
base::namespaceImportClasses
base::contributors
base::unix.time
base::ngettext
base::print.Dlist
base::Find
base::all.equal.envRefClass

base::gettext
base::[.factor
base::body<-
base::rawToChar




base::importIntoEnv

base::isIncomplete

base::bitwXor

base::format.factor
base::Map
base::getTaskCallbackNames

base::Mod
base::sQuote
base::regexec
base::-.Date
base::regexpr
base::[.noquote
base::sys.nframe
base::as.table
base::sys.load.image
base::source
base::objects
base::is.table
base::sys.status

base::search
base::is.infinite
base::.Machine

base::weekdays.Date
base::rownames
base::readRenviron
base::textConnection
base::.rowMeans
base::getSrcLines
base::.Call
base::unclass
base::.expand_R_libs_env_var
base::gc.time
base::cummax
base::gcinfo
base::cummin
base::.mergeImportMethods

base::addTaskCallback
base::file.mode
base::.knownS3Generics
base::unlockBinding

base::.deparseOpts
base::file.info
base::.row

base::xtfrm.Surv
base::attachNamespace
base::dQuote
base::bquote
base::builtins
base::.standard_regexps
base::length<-
base::format.summaryDefault
base::xzfile
base::cut.Date
base::nchar

base::writeChar
base::La_library
base::strptime
base::all.equal.numeric
base::readline

base::.__H__.rbind
base::registerS3method
base::as.list.default
base::setNamespaceInfo
base::seq.Date
base::getNamespaceInfo
base::asinh
base::sys.on.exit
base::namespaceImportMethods

base::cumsum
base::environmentName
base::as.list.environment
base::restartDescription
base::[<-
base::.signalSimpleWarning
base::autoload
base::format.pval

base::environment<-
base::as.call
base::with
base::round.Date
base::emptyenv
base::[.AsIs
base::as.list.function
base::agrepl
base::comment<-
base::seq_len
base::rowsum.default

base::besselI
base::besselJ
base::besselK
base::besselY
base::numeric
base::withCallingHandlers
base::open.srcfilecopy
base::weekdays
base::formatDL

base::system2
base::mostattributes<-
base::.External2
base::as.factor
base::data.class
base::is.symbol

base::substring<-
base::memCompress
base::simpleMessage


base::make.names
base::as.null
base::storage.mode
base::substr<-
base::getExportedValue
base::mean.Date
base::atan2
base::requireNamespace
base::atanh
base::is.nan
base::class

base::length<-.factor
base::agrep
base::which.min
base::as.Date.default
base::Sys.glob
base::Sys.getpid
base::which.max
base::pretty.default
base::on.exit
base::tcrossprod
base::.Date
base::crossprod

base::abs
base::months.Date

base::stdin
base::all
base::as.numeric
base::any
base::Encoding<-
base::isTRUE
base::charToRaw
base::Sys.time
base::as.Date.numeric
base::environment
base::cat
base::is.raw

base::readLines
base::.rowSums
base::charmatch
base::col
base::cos
base::Sys.Date
base::det
base::cut
base::dim
base::dir

base::.methodsNamespace
base::as.symbol
base::[[.factor

base::summary.factor
base::anyDuplicated.matrix
base::getDLLRegisteredRoutines.DLLInfo
base::exp
base::print.Date

base::for
base::rowSums
base::rawShift
base::get
base::open.srcfilealias

base::identity
base::Summary.factor
base::print.summaryDefault
base::toString.default
base::pushBackLength
base::extSoftVersion
base::serialize
base::is.complex
base::loadNamespace
base::all.equal.default
base::print.condition
base::RNGkind
base::summary.table
base::list

base::as.character.error
base::strtrim
base::licence
base::summary

base::packageStartupMessage
base::print.summary.warnings
base::pmax.int
base::julian.Date
base::rownames<-
base::license
base::sys.save.image
base::lazyLoadDBexec
base::max.col
base::invisible
base::open.srcfile
base::searchpaths
base::namespaceImportFrom
base::sys.frames
base::Recall

base::log
base::rawToBits
base::max
base::floor

base::close
base::Math.Date


base::min

base::assign
base::taskCallbackManager
base::gettextf
base::.NotYetUsed
base::setHook
base::load
base::Negate
base::unique.matrix
base::log2

base::untrace
base::logb

base::droplevels.factor
base::R.version
base::R.Version
base::within.list
base::inherits
base::Sys.setenv
base::comment
base::print.DLLInfoList
base::vector
base::system
base::.First.sys
base::save.image

base::row.names<-.default

base::format.info
base::|.hexmode
base::.F_dqrqy
base::Sys.setFileTime
base::.F_dqrxb
base::setequal
base::raw
base::typeof
base::rep
base::rev
base::paste0
base::rle
base::conditionMessage
base::.F_dqrcf
base::row
base::stderr
base::.Last.value
base::seq
base::flush
base::sin
base::intToUtf8
base::acos
base::within
base::tan
base::as.matrix.noquote
base::libcurlVersion
base::sub
base::sum
base::svd
base::upper.tri
base::isSymmetric.matrix
base::is.factor
base::mean
base::try
base::rev.default
base::is.character
base::Sys.getenv
base::!.octmode
base::unz

base::url
base::Ops.Date
base::as.environment

base::mget
base::print.eigen
base::invokeRestartInteractively
base::getNamespaceExports


base::dim<-

base::icuGetCollate
base::dirname

base::Sys.info
base::.find.package
base::as.Date.character

base::xor

base::allowInterrupts
base::%in%
base::julian
base::intToBits
base::validUTF8
base::capabilities
base::oldClass<-
base::print.simple.list
base::namespaceImport
base::geterrmessage
base::delayedAssign
base::print.DLLRegisteredRoutines
base::Sys.setlocale

base::[.Date
base::..getNamespace
base::levels<-.factor
base::range

base::deparse
base::pairlist
base::sinpi

base::print.NativeRoutineList
base::psigamma
base::file.access
base::is.environment
base::Math.factor
base::getRversion
base::droplevels
base::determinant.matrix
base::stdout

base::suspendInterrupts

base::.F_dqrqty
base::trace
base::callCC
base::.getNamespace

base::rowMeans
base::.isOpen
base::format.packageInfo
base::.F_dqrrsd
base::print.default
base::shQuote
base::cut.default
base::range.default
base::structure
base::mode

base::attributes

base::all.names
base::as.character


base::simpleCondition


base::endsWith
base::print.connection
base::&.octmode
base::parent.env<-
base::split.default
base::asS3
base::asS4
base::with.default
base::args
base::break

base::matrix

base::basename
base::.Traceback
base::lbeta
base::asin
base::summary.default
base::file.append
base::srcfile
base::Sys.which
base::ncol
base::return
base::atan


base::socketConnection
base::format.Date
base::getConnection
base::tryCatch
base::attr
base::tracemem

base::format.hexmode
base::beta

base::summary.Date
base::next
base::Sys.getlocale
base::lower.tri
base::rbind
base::union
base::write
base::units
base::cbind


base::month.abb
base::diag<-
base::Sys.unsetenv
base::dyn.unload
base::scale.default
base::invokeRestart
base::is.na<-.factor

base::all.equal.language
base::bitwOr
base::.Library.site
base::.packageStartupMessage
base::close.connection
base::row.names<-
base::trimws
base::.Call.graphics
base::.C_R_addTaskCallback
base::unserialize

base::.amatch_bounds
base::.S3_methods_table
base::.row_names_info
base::standardGeneric
base::.F_dqrdc2
base::[.Dlist

base::R.home
base::unique.default
base::sys.frame
base::sys.source

base::clearPushBack
base::.leap.seconds

base::bindtextdomain
base::lgamma
base::aperm.table
base::getLoadedDLLs

base::as.Date.factor
base::format.libraryIQR
base::unique

base::merge.default
base::ifelse
base::is.atomic
base::+.Date
base::sys.parents
base::body
base::as.character.default
base::rep.int

base::xtfrm.Date
base::norm

base::as.list.factor
base::retracemem
base::local
base::expression
base::Reduce
base::signalCondition
base::validEnc
base::log10
base::isSymmetric
base::log1p
base::is.expression


base::sys.parent
base::call
base::is.object
base::pos.to.env

base::attributes<-
base::sweep
base::.C_R_removeTaskCallback
base::.libPaths
base::.getNamespaceInfo

base::encodeString
base::trunc
base::system.time

base::[.hexmode
base::bitwShiftR
base::nrow
base::bitwShiftL
base::print.restart
base::RNGversion

base::[.table

base::withVisible
base::file.create
base::getHook

base::row.names.default
base::print.AsIs
base::Filter

base::single
base::attr.all.equal

base::.primUntrace
base::factorial
base::lfactorial

base::colnames
base::dontCheck

base::all.equal.list
base::levels
base::.colMeans
base::levels<-
base::labels
base::.dynLibs
base::isatty
base::file.remove
base::ordered
base::...length
base::exists
base::prettyNum
base::isRestart
base::setTimeLimit

base::.__H__.cbind
base::list.dirs
base::truncate
base::formals<-
base::quarters
base::.External
base::xtfrm.factor
base::oldClass
base::as.function.default
base::chol
base::file.rename
base::loadedNamespaces
base::all.equal.factor
base::.BaseNamespaceEnv
base::truncate.connection
base::is.finite

base::labels.default
base::strwrap
base::.Internal

base::tolower
base::gzfile
base::.Fortran
base::last.warning

base::env.profile
base::is.na

base::open.connection
base::is.qr
base::duplicated
base::writeBin
base::flush.connection
base::rcond
base::is.ordered

base::isSeekable
base::as.ordered
base::[.simple.list
base::iconv
base::tempdir


base::print.octmode
base::summary.proc_time
base::chol2inv
base::as.character.Date

base::Sys.timezone
base::quarters.Date
base::stopifnot

base::packBits

base::strrep
base::force


base::format
base::NextMethod
base::..deparseOpts
base::.TAOCP1997init
base::Vectorize
base::getNamespaceUsers
base::cosh
base::open


base::print.summary.table
base::substr
base::cospi

base::c.warnings
base::[.warnings
base::print.packageInfo
base::NCOL
base::is.numeric
base::strtoi
base::.path.package
base::.GenericArgsEnv
base::rep_len

base::date
base::names<-
base::closeAllConnections
base::as.logical
base::getDLLRegisteredRoutines
base::round
base::file.exists
base::.F_dtrco
base::polyroot
base::.kronecker
base::.traceback
base::browser
base::is.double
base::months
base::toupper
base::duplicated.default
base::.bincode

base::toString
base::socketSelect
base::print.libraryIQR
base::prop.table
base::new.env
base::which

base::while
base::is.element
base::as.raw
base::nzchar
base::replace
base::complex
base::dget
base::environmentIsLocked
base::.Deprecated
base::alist
base::is.list
base::Ops.factor
base::setdiff
base::pmin.int
base::slice.index
base::getAllConnections
base::duplicated.warnings

base::ceiling
base::diag
base::as.complex
base::sequence
base::diff
base::.doSortWrap
base::anyDuplicated
base::all.equal.environment
base::pipe
base::ISOdatetime
base::replicate

base::lazyLoadDBfetch
base::conflicts
base::.rmpkg
base::as.Date

base::mean.default
base::cumprod
base::as.double


base::findRestart


base::findPackageEnv
base::pmax
base::getNamespaceImports

base::pmin
base::as.character.srcref
base::trunc.Date
base::print.hexmode
base::provideDimnames
base::match.arg
base::enquote
base::file.path
base::as.character.condition
base::.Platform
base::|.octmode
base::memDecompress

base::lazyLoad
base::srcref

base::t.default
base::warning
base::.__S3MethodsTable__.
base::substring
base::commandArgs

base::file.symlink
base::[.DLLInfoList
base::getCallingDLLe

base::NROW
base::match.fun
base::dput
base::tempfile
base::...elt
base::print.by
base::summary.matrix
base::Summary.ordered
base::.Script
base::mode<-
base::La.svd
base::rawConnection
base::format.AsIs
base::is.integer
base::prod
base::as.integer
base::drop
base::Sys.umask
base::.doTrace
base::browserText

base::bindingIsActive
base::file.copy

base::eigen
base::is.function
base::month.name
base::digamma
base::l10n_info
base::detach

base::integer
base::getCallingDLL
base::tracingState
base::as.function
base::attach
base::dump

base::is.recursive
base::unlink
base::seq_along
base::pcre_config

base::unlist

base::all.equal
base::regmatches

base::.Device
base::.tryResumeInterrupt
base::getNamespaceName
base::parent.frame
base::factor
base::message
base::lockBinding
base::.valid.factor
base::Position

base::.Defunct
