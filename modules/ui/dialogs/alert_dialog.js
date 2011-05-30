// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Dominik
// Date:      23.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

m_require('ui/dialog.js');

/**
 * @class
 *
 * This is the prototype for any alert dialog view. It is derived from M.DialogView
 * and mainly used for implementing a alert dialog view specific render method.
 *
 * @extends M.DialogView
 */
M.AlertDialogView = M.DialogView.extend(
/** @scope M.AlertDialogView.prototype */ {

    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'M.AlertDialogView',

    /**
     * The default title of an alert dialog.
     *
     * @type String
     */
    title: 'Alert',

    /**
     * The default message of an alert dialog.
     *
     * @type String
     */
    message: '',

    /**
     * Determines whether the alert dialog gets a default ok button.
     *
     * @type Boolean
     */
    hasOkButton: YES,

    /**
     * Determines the value of the button, means the text label on it.
     *
     * @type String
     */
    confirmButtonValue: 'Ok',

    /**
     * Renders an alert dialog as a pop up
     *
     * @private
     * @returns {String} The alert dialog view's html representation.
     */
    render: function() {
        this.html = '<div class="tmp-dialog-background"></div>';
        this.html += '<div id="' + this.id + '" class="tmp-dialog">';
        this.html += '<div class="tmp-dialog-header">';
        this.html += this.title ? this.title : '';
        this.html +='</div>';
        this.html += '<div class="tmp-dialog-content">';
        this.html += this.message;
        this.html +='</div>';
        var button;
        if(this.hasOkButton) {
            this.html += '<div class="tmp-dialog-footer">';
            var that = this;
            button = M.ButtonView.design({
                value: this.confirmButtonValue,
                cssClass: 'b tmp-dialog-smallerbtn',
                events: {
                    tap: {
                        target: that,
                        action: 'hide'
                    }
                }
            });
            this.html += button.render();
            this.html += '</div>';
        }
        this.html += '</div>';

        $('body').append(this.html);
        if(button.type) {
            button.registerEvents();
            button.theme();
        }
    },

    show: function() {
        /* call the dialog's render() */
        this.render();

        var dialog = $('#' + this.id);
        //if(dialog.hasClass('hidden')) {
		//	dialog.removeClass('hidden');
            dialog.addClass('pop in');
		//}
    },

    hide: function() {
        var dialog = $('#' + this.id);
        //if(dialog.hasClass('show')) {
			//dialog.removeClass('show');
			dialog.addClass('pop out');
		//}
        $('.tmp-dialog-background').remove();
        this.destroy();
    }




});