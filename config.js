/*
This is an example configuration file.

COPY OR RENAME THIS FILE TO config.js.

Make sure you use real IDs from your HA entities.
*/

function formatDate ( ts ) {
    
    var date = new Date( ts );
    var year = date.getFullYear();
    var month = ( "0" + ( date.getMonth () + 1 ) ).substr ( -2 );
    var day = ( "0" + date.getDate () ).substr ( -2 );
    var hour =  ( "0" + date.getHours () ).substr ( -2 );
    var minutes = ( "0" + date.getMinutes () ).substr ( -2 );
    //var seconds = ( "0" + date.getSeconds () ).substr ( -2 );

    return day + "." + month + "." + year + " - " + hour + ":" + minutes + " Uhr";
      
}

var weather_condition_map = {
    "clear-night": "klar",
    "clear-night": "klar",
    "cloudy": "wolkig",
    "fog": "Nebel",
    "hail": "Hagel",
    "lightning": "Blitzschlag",
    "lightning-rainy": "Gewitter",
    "partlycloudy": "teilweise bewölkt",
    "pouring": "Wolkenbruch",
    "rainy": "Regen",
    "snowy": "Schneefall",
    "snowy-rainy": "Schneeregen",
    "sunny": "sonnig",
    "windy": "windig",
    "windy-variant": "stürmisch",
};

var weather_icon_map = {
    // from home-assistant https://www.home-assistant.io/components/weather/
    'clear-night': 'nt-clear',
    'cloudy': 'cloudy',
    'fog': 'fog',
    'hail': 'chanceflurries',
    'lightning': 'chancetstorms',
    'lightning-rainy': 'chancerain',
    'partlycloudy': 'partlycloudy',
    'pouring': 'rain',
    'rainy': 'sleet',
    'snowy': 'snow',
    'snowy-rainy': 'sleet',
    'sunny': 'clear',
    'windy': 'hazy',
    'windy-variant': 'flurries',
};

var garage_state_map = {
    'open': 'offen',
    'closed': 'geschlossen',
    'up': 'aufwärts',
    'down': 'abwärts',
    'stopped': 'angehalten',
    'moving': 'in Bewegung'
};

var CONFIG = {
    
    customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
    transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED_GPU, ANIMATED or SIMPLE (better perfomance)
    entitySize: ENTITY_SIZES.NORMAL, //SMALL, NORMAL, BIG are available
    tileSize: 145,
    tileMargin: 6,
    serverUrl: "https://" + location.hostname + ":8123",
    wsUrl: "wss://" + location.hostname + ":8123/api/websocket",
    // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
    authToken: token,
    //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
    //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
    debug: false, // Prints entities and state change info to the console.
    pingConnection: true, //ping connection to prevent silent disconnections

    // next fields are optional
    events: [],
    timeFormat: 24,
    menuPosition: MENU_POSITIONS.LEFT, // LEFT or BOTTOM
    hideScrollbar: true, // horizontal scrollbar
    groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

    header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
        styles: {
            padding: '5px 40px 0',
            fontSize: '22px'
        },
        right: [],
        left: [
            {
                type: HEADER_ITEMS.DATETIME,
                dateFormat: 'EEEE, dd. LLLL yyyy', //https://docs.angularjs.org/api/ng/filter/date
            }
        ]
    },

    /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
    timeout: 300, // after 5 mins of inactive
    slidesTimeout: 10, // 10s for one slide
    styles: { fontSize: '40px' },
    leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
    slides: [
    { bg: 'images/bg1.jpeg' },
    {
    bg: 'images/bg2.png',
    rightTop: [ // put text to the 2nd slide
    {
    type: SCREENSAVER_ITEMS.CUSTOM_HTML,
    html: 'Welcome to the <b>TileBoard</b>',
    styles: { fontSize: '40px' }
    }
    ]
    },
    { bg: 'images/bg3.jpg' }
    ]
    },*/

    pages: [
        {
            hidden: false,
            //title: 'Main page',
            bg: 'images/bg1.jpeg',
            icon: 'mdi-home-outline', // home icon
            styles: {
                padding: '5px 0px'
            },
            groups: [
                {
                    //title: '',
                    width: 4,
                    height: 2,
                    items: [
                        // {
                        //     position: [0, 0],
                        //     height: 2,
                        //     //classes: ['-compact'],
                        //     type: TYPES.WEATHER,
                        //     title: 'Wetter',
                        //     id: 'weather.openweathermap',
                        //     states: weather_condition_map,
                        //     icon: '&weather.openweathermap.state',
                        //     icons: weather_icon_map,
                        //     fields: {
                        //         summary: '&sensor.openweathermap_condition.state',
                        //         temperature: '&sensor.openweathermap_temperature.state',
                        //         temperatureUnit: '&sensor.openweathermap_temperature.attributes.unit_of_measurement',
                        //         humidity: '&sensor.openweathermap_humidity.state',
                        //         humidityUnit: '&sensor.openweathermap_humidity.attributes.unit_of_measurement',
                        //         windSpeed: '&sensor.openweathermap_wind_speed.state',
                        //         windSpeedUnit: 'km/h',
                        //         list: [
                        //             'Luftdruck '
                        //             + '&sensor.openweathermap_pressure.state'
                        //             + '&sensor.openweathermap_pressure.attributes.unit_of_measurement'
                        //             // + '&sensor.owm_condition.state',
                        //             // 'code '
                        //             // + '&sensor.owm_weather_code.state',
                        //         ]
                        //     }
                        // },
                        {
                            position: [0, 0],
                            type: TYPES.SENSOR,
                            title: 'Außentemperatur',
                            id: 'sensor.dht22_terrace_temperature',
                            unit: '°C',
                            state: false
                        },
                        {
                            position: [0, 1],
                            type: TYPES.SENSOR,
                            id: 'sensor.tileboard_temperature_template',
                            title:
                                function ( item, entity ) {
                                    return entity.attributes.text;
                                },
                            unit: '°C',
                            state: false
                        },
                        {
                            position: [1, 0],
                            type: TYPES.COVER,
                            title: 'Garagentor',
                            id: 'cover.relay_garage',
                            state: function () {
                                return garage_state_map [this.parseFieldValue ( '&sensor.relay_garage_state.state' )];
                            },
                            customStyles: function ( item, entity ) {
                                if ( this.parseFieldValue ( '&sensor.relay_garage_state.state' ) == 'closed' ) {
                                    return {
                                        'animation-name': 'none',
                                        'background-color': 'green',
                                    }
                                }
                                else {
                                    return {
                                        'animation-name': 'pulse',
                                        'animation-duration': '1.5s',
                                        'animation-iteration-count': 'infinite'
                                    }
                                }
                            }
                        },
                        {
                            position: [1, 1],
                            type: TYPES.SENSOR_ICON,
                            id: 'binary_sensor.wasserampel',
                            icons:
                                function ( item, entity ) {
                                    return entity.attributes.icon.replace ( "mdi:", "mdi-" );
                                },
                            state: '@attributes.text',
                            customStyles:
                                function ( item, entity ) {
                                    return {
                                        'animation-name': 'none',
                                        'background-color': entity.attributes.icon_color,
                                    }
                                }
                        },
                        {
                            position: [2, 0],
                            type: TYPES.GAUGE,
                            title: 'Solarproduktion',
                            id: 'sensor.total_dc_power',
                            // value: function ( item, entity ) {
                                // return entity.state.replace ( ",", "." );
                            // },
                            state: '&sensor.solar_meter_daily.state &sensor.solar_meter_daily.attributes.unit_of_measurement',
                            settings: {
                                size: 140,                                                          // Defaults to 50% of either height or width, whichever is smaller
                                type: 'arch',                                                       // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                                min: 0,                                                             // Defaults to 0
                                max: 15000,                                                         // Defaults to 100, TODO read input_number.
                                cap: 'round',                                                       // Options are: 'round', 'butt'. Defaults to 'butt'
                                thick: 10,                                                           // Defaults to 6
                                // label: 'Solarproduktion',                                           // Defaults to undefined
                                append: '@attributes.unit_of_measurement',                          // Defaults to undefined
                                // prepend: '$',                                                       // Defaults to undefined
                                duration: 1500,                                                     // Defaults to 1500ms
                                // thresholds: { 0: { color: 'green'}, 80: { color: 'red' } },         // Defaults to undefined
                                labelOnly: false,                                                   // Defaults to false
                                foregroundColor: function ( item, entity ) {
                                    if ( entity.state > 0 )
                                        return 'rgba(255, 255, 0, 1)'
                                    else
                                        return 'rgba(128, 128, 128, 1)'
                                },
                                // Defaults to rgba(0, 150, 136, 1)
                                // backgroundColor: 'rgba(0, 0, 0, 0.1)',                              // Defaults to rgba(0, 0, 0, 0.1)
                                fractionSize: 0,                                                    // Number of decimal places to round the number to. Defaults to current locale formatting
                            },
                        },
                        {
                            position: [2, 1],
                            type: TYPES.SENSOR_ICON,
                            id: 'binary_sensor.battery_state',
                            icons:
                                function ( item, entity ) {
                                    return entity.attributes.icon.replace ( "mdi:", "mdi-" );
                                },
                            state: '@attributes.level',
                            customStyles:
                                function ( item, entity ) {
                                    return {
                                        'animation-name': 'none',
                                        'background-color': entity.attributes.icon_color,
                                    }
                                }
                        },               
                        {
                            position: [3, 0],
                            type: TYPES.GAUGE,
                            title: 'Autoladung',
                            id: 'sensor.wallbox_power',
                            // value: function ( item, entity ) {
                                // return entity.state.replace ( ",", "." );
                            // },
                            state: '&sensor.wallbox_meter_daily.state &sensor.wallbox_meter_daily.attributes.unit_of_measurement',
                            settings: {
                                size: 140,                                                          // Defaults to 50% of either height or width, whichever is smaller
                                type: 'arch',                                                       // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                                min: 0,                                                             // Defaults to 0
                                max: 15000,                                                         // Defaults to 100, TODO read input_number.
                                cap: 'round',                                                       // Options are: 'round', 'butt'. Defaults to 'butt'
                                thick: 10,                                                           // Defaults to 6
                                // label: 'Solarproduktion',                                           // Defaults to undefined
                                append: '@attributes.unit_of_measurement',                          // Defaults to undefined
                                // prepend: '$',                                                       // Defaults to undefined
                                duration: 1500,                                                     // Defaults to 1500ms
                                // thresholds: { 0: { color: 'green'}, 80: { color: 'red' } },         // Defaults to undefined
                                labelOnly: false,                                                   // Defaults to false
                                foregroundColor: function ( item, entity ) {
                                    if ( entity.state > 0 )
                                        return 'rgba(255, 255, 0, 1)'
                                    else
                                        return 'rgba(128, 128, 128, 1)'
                                },                            // Defaults to rgba(0, 150, 136, 1)
                                // backgroundColor: 'rgba(0, 0, 0, 0.1)',                              // Defaults to rgba(0, 0, 0, 0.1)
                                fractionSize: 0,                                                    // Number of decimal places to round the number to. Defaults to current locale formatting
                            },
                        },
                        {
                            position: [3, 1],
                            type: TYPES.SENSOR_ICON,
                            id: 'binary_sensor.wallbox_state',
                            title: 'Wallbox',
                            subtitle: '@attributes.text',
                            icon: 'mdi-ev-station',
                            // icons:
                            //     function ( item, entity ) {
                            //         return entity.attributes.icon.replace ( "mdi:", "mdi-" );
                            //     },
                            state: '&sensor.ev6_ev_battery_level.state %',
                            customStyles:
                                function ( item, entity ) {
                                    return {
                                        'animation-name': 'none',
                                        'background-color': entity.attributes.icon_color,
                                    }
                                }
                        }                 
                    ]
                }
            ]
        },
        {
            hidden: false,
            //title: 'Lichter',
            bg: 'images/bg2.png',
            icon: 'mdi-lightbulb',
            styles: {
                padding: '75px 0px'
            },
            groups: [
                {
                    title: '',
                    width: 4,
                    height: 2,
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.LIGHT,
                            id: 'light.automatic_indoor_lights',
                            title: 'Innenlichter',
                            subtitle: 'indoor',
                            states: {
                                on: "An",
                                off: "Aus"
                            },                    
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb"
                            }
                        },
                        {
                            position: [0, 1],
                            type: TYPES.LIGHT,
                            id: 'light.automatic_outdoor_lights',
                            title: 'Außenlichter',
                            subtitle: 'outdoor',
                            states: {
                                on: "An",
                                off: "Aus"
                            },                    
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb"
                            }
                        },
                        {
                            position: [1, 0],
                            type: TYPES.LIGHT,
                            id: 'light.led_kitchen_led',
                            title: 'Arbeitslicht',
                            subtitle: 'Küche',
                            states: {
                                on: "An",
                                off: "Aus"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            },
                            sliders: [
                                {
                                    title: 'Brightness',
                                    field: 'brightness',
                                    max: 255,
                                    min: 0,
                                    step: 5,
                                    request: {
                                        type: "call_service",
                                        domain: "light",
                                        service: "turn_on",
                                        field: "brightness"
                                    }
                                },
                                {
                                    title: 'Color temp',
                                    field: 'color_temp',
                                    max: 588,
                                    min: 153,
                                    step: 15,
                                    request: {
                                        type: "call_service",
                                        domain: "light",
                                        service: "turn_on",
                                        field: "color_temp"
                                    }
                                }
                            ],
                            colorpicker: true
                        },
                        {
                            position: [1, 1],
                            type: TYPES.SWITCH,
                            id: 'switch.shelly_xtool_m1ultra',
                            title: 'XTool M1 Ultra',
                            subtitle: 'Büro',
                            states: {
                                on: "An",
                                off: "Aus"
                            },
                            icons: {
                                on: "mdi-box-cutter",
                                off: "mdi-box-cutter",
                            }
                        },
                        {
                            position: [2, 0],
                            type: TYPES.SWITCH,
                            id: 'switch.poolpumpe',
                            title: 'Pool',
                            subtitle: 'Garten',
                            hidden:
                                function ( item, entity ) {
                                    return entity.state == 'unavailable';
                                },
                            states: {
                                on: "An",
                                off: "Aus"
                            },
                            icons: {
                                on: "mdi-pool",
                                off: "mdi-pool",
                            }
                        },
                        {
                            position: [2, 1],
                            type: TYPES.INPUT_BOOLEAN,
                            id: 'input_boolean.daily_vacuum',
                            title: 'Staubsaugen',
                            subtitle: 'Einstellung',
                            states: {
                                on: "An",
                                off: "Aus"
                            },
                            icons: {
                                on: "mdi-robot-vacuum",
                                off: "mdi-robot-vacuum",
                            }
                        },
                        {
                            position: [3, 0],
                            type: TYPES.SWITCH,
                            id: 'switch.shelly_bambulab_x1c',
                            title: 'Bambulab X1C',
                            subtitle: 'Büro',
                            states: {
                                on: "An",
                                off: "Aus"
                            },
                            icons: {
                                on: "mdi-printer-3d",
                                off: "mdi-printer-3d",
                            }
                        },
                        {
                            position: [3, 1],
                            type: TYPES.INPUT_BOOLEAN,
                            id: 'input_boolean.light_simulation',
                            title: 'Lichtsimulation',
                            subtitle: 'Einstellung',
                            states: {
                                on: "An",
                                off: "Aus"
                            },
                            icons: {
                                on: "mdi-dip-switch",
                                off: "mdi-dip-switch",
                            }
                        },
                    ]
                },
            ]
        }
    ],
}
