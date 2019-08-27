// File: ./i18n.js

const i18n = require('i18n');

i18n.configure({
	// setup some locales - other locales default to en silently
	locales:['vi', 'en'], 
	
	// fall back from Dutch to German
    fallbacks:{'vi': 'en'},
	
	// setup default language.
	defaultLocale: 'en', 
	
	// setup cookie var name. 
	cookie: 'lang', 
	
	// control mode on directory creation - defaults to NULL which defaults to umask of process user. Setting has no effect on win.
    directoryPermissions: '755', 
	
	// watch for changes in json files to reload locale on updates - defaults to false
    autoReload: true, 
	
	// whether to write new locale information to disk - defaults to true
    updateFiles: false,
	
	// sync locale information across all files - defaults to false
    syncFiles: false, 
	
	// what to use as the indentation unit - defaults to "\t"
    indent: "\t",
	
	// setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.js', 
	
	// setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
    prefix: 'trans-', 
	
	// enable object notation
    objectNotation: false, 
	
	// setting of log level DEBUG - default to require('debug')('i18n:debug')
    // logDebugFn: function (msg) 
	// {
        // console.log('debug', msg);
    // }, 
	
	// setting of log level WARN - default to require('debug')('i18n:warn')
    // logWarnFn: function (msg)
	// {
        // console.log('warn', msg);
    // }, 
	
	// setting of log level ERROR - default to require('debug')('i18n:error')
    // logErrorFn: function (msg) 
	// {
        // console.log('error', msg);
    // }, 
	
	// object or [obj1, obj2] to bind the i18n api and current locale to - defaults to null
    register: global, 
	
	// hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
    // note that this will *not* overwrite existing properties with the same name
    // api: {
      // '__': 't',  //now req.__ becomes req.t
      // '__n': 'tn' //and req.__n can be called as req.tn
    // },
	
	// Downcase locale when passed on queryParam; e.g. lang=en-US becomes
    // en-us.  When set to false, the queryParam value will be used as passed;
    // e.g. lang=en-US remains en-US.
    preserveLegacyCase: true, 
	
	// setup file location.
    directory: __dirname + '/locales' 
}); 

module.exports = ( req, res, next ) => 
{
	// initialize the language.
	i18n.init( req, res );  
	
	// setup the new locales.
	var default_locale = 'en'; 
	
	// Update the default language.
	i18n.setLocale(res.locals, default_locale);
	
	// get current locale.
	var current_locale = i18n.getLocale(); 
	
	// trace the current language into cookie.
	res.cookie('lang', current_locale, { maxAge: 900000, httpOnly: true });
	
	return next(); 
};