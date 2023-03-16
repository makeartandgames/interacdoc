// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

var Config = (function(window, undefined) {

    var bratCollData = {
	'entity_types': [
// this is optional
        {
            'type': 'SPAN_DEFAULT',
            'bgColor': '#7fa2ff',
            'borderColor': 'darken'
        },
        {
            'type': 'RECIPIENT',
            'bgColor': '#3aaa00',
            'borderColor': 'darken'
        },
        {
            'type': 'RESOURCE',
            'bgColor': '#f00000',
            'borderColor': 'darken'
        },
        {
            'type': 'PROVIDER',
            'bgColor': '#daaa00',
            'borderColor': 'darken'
        },
        {
            'type': 'GOOD',
            'bgColor': 'green',
            'borderColor': 'darken'
        },
        {
            'type': 'UP',
            'bgColor': 'green',
            'borderColor': 'darken'
        },
        {
            'type': 'DOWN',
            'bgColor': 'red',
            'borderColor': 'darken'
        },
        {
            'type': 'BAD',
            'bgColor': 'red',
            'borderColor': 'darken'
        },
        {
            'type': 'source',
            'bgColor': 'red',
            'borderColor': 'darken'
        },
        {
            'type': 'elaboration',
            'bgColor': 'red',
            'borderColor': 'darken'
        },
        {
            'type': 'property',
            'bgColor': 'orange',
            'borderColor': 'darken'
        },

        {
            'type': 'target',
            'bgColor': 'yellow',
            'borderColor': 'darken'
        },
        {
            'type': 'ACADEMIC',
            'bgColor': '#4aaa00',
            'borderColor': 'lighten'
        },
        {
            'type': 'PERSONAL',
            'bgColor': '#afa9f0',
            'borderColor': 'darken',
            // labels: ["TEEN", "COLLOQUIAL"]
        },
        {
            'type': 'TEEN',
            'bgColor': '#afa9f0',
            'borderColor': 'darken',
        },
        {
            'type': 'ARC_NSUBJ',
            'color': 'red',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
        {
            'type': 'ARC_DEFAULT',
            'color': 'black',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
        {
            'type': 'token',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
        {
            'type': '-',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        }
	],
  'event_attribute_types': [],
  'entity_attribute_types': [
        {
            'type':   'Name',
            'values': { 
                'Name' : { 'glyph': '(N)' },
             },
         },
         ],
	'relation_types': [
// this is optional
         {
             'type': 'metaphorical',
             'labels': [], // [ 'acts-on' ],
             'dashArray': '3,3',
             'color': 'purple',
             'args': [
                 {
                     'role': 'arg1',
                     'targets': [ 'token' ]
                 },
                 {
                     'role': 'arg2',
                     'targets': [ 'token' ]
                 }
             ]
         }
        ],
	'event_types': [],
    };

    return {
        bratCollData: bratCollData,
    };
})(window);
