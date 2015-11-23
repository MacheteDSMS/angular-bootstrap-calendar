/**
 * angular-bootstrap-calendar - A pure AngularJS bootstrap themed responsive calendar that can display events and has views for year, month, week and day
 * @version v0.17.0
 * @link https://github.com/mattlewis92/angular-bootstrap-calendar
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), (function webpackLoadOptionalExternalModule() { try { return require("interact.js"); } catch(e) {} }()), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "interact", "moment"], factory);
	else if(typeof exports === 'object')
		exports["angularBootstrapCalendarModuleName"] = factory(require("angular"), (function webpackLoadOptionalExternalModule() { try { return require("interact.js"); } catch(e) {} }()), require("moment"));
	else
		root["angularBootstrapCalendarModuleName"] = factory(root["angular"], root["interact"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_49__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(8);

	module.exports = __webpack_require__(12);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	function requireAll(r) {
	  r.keys().forEach(r);
	}

	module.exports = angular
	  .module('mwl.calendar', [])
	  .constant('calendarUseTemplates', (false) === false)
	  .run(["$templateCache", "calendarUseTemplates", function($templateCache, calendarUseTemplates) {
	    if (calendarUseTemplates) {
	      $templateCache.put('calendarMonthCellEvents.html', __webpack_require__(14));
	      $templateCache.put('calendarMonthCell.html', __webpack_require__(15));
	    }
	  }]).name;

	requireAll(__webpack_require__(16));
	requireAll(__webpack_require__(37));
	requireAll(__webpack_require__(42));


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"events-list\" ng-show=\"day.events.length > 0\">\r\n  <a\r\n    ng-repeat=\"event in day.events | orderBy:'startsAt' track by event.$id\"\r\n    href=\"javascript:;\"\r\n    ng-click=\"vm.onEventClick({calendarEvent: event})\"\r\n    class=\"pull-left event\"\r\n    ng-class=\"'event-' + event.type + ' ' + event.cssClass\"\r\n    ng-mouseenter=\"vm.highlightEvent(event, true)\"\r\n    ng-mouseleave=\"vm.highlightEvent(event, false)\"\r\n    tooltip-append-to-body=\"true\"\r\n    uib-tooltip-html=\"((event.startsAt | calendarDate:'time':true) + (vm.calendarConfig.displayEventEndTimes && event.endsAt ? ' - ' + (event.endsAt | calendarDate:'time':true) : '') + ' - ' + event.title) | calendarTrustAsHtml\"\r\n    mwl-draggable=\"event.draggable === true\"\r\n    drop-data=\"{event: event}\">\r\n  </a>\r\n</div>\r\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div\r\n  mwl-droppable\r\n  on-drop=\"vm.handleEventDrop(dropData.event, day.date)\"\r\n  class=\"cal-month-day {{ day.cssClass }}\"\r\n  ng-class=\"{\r\n            'cal-day-outmonth': !day.inMonth,\r\n            'cal-day-inmonth': day.inMonth,\r\n            'cal-day-weekend': day.isWeekend,\r\n            'cal-day-past': day.isPast,\r\n            'cal-day-today': day.isToday,\r\n            'cal-day-future': day.isFuture\r\n          }\">\r\n\r\n  <small\r\n    class=\"cal-events-num badge badge-important pull-left\"\r\n    ng-show=\"day.badgeTotal > 0\"\r\n    ng-bind=\"day.badgeTotal\">\r\n  </small>\r\n\r\n  <span\r\n    class=\"pull-right\"\r\n    data-cal-date\r\n    ng-click=\"vm.calendarCtrl.drillDown(day.date)\"\r\n    ng-bind=\"day.label\">\r\n  </span>\r\n\r\n  <div class=\"cal-day-tick\" ng-show=\"dayIndex === vm.openDayIndex && vm.view[vm.openDayIndex].events.length > 0\">\r\n    <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n    <i class=\"fa fa-chevron-up\"></i>\r\n  </div>\r\n\r\n  <ng-include src=\"vm.cellEventsTemplateUrl || 'calendarMonthCellEvents.html'\"></ng-include>\r\n\r\n  <div id=\"cal-week-box\" ng-if=\"$first && rowHovered\">\r\n    {{ vm.calendarConfig.i18nStrings.weekNumber.replace('{week}', day.date.week()) }}\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./mwlCalendar.js": 17,
		"./mwlCalendarDay.js": 19,
		"./mwlCalendarHourList.js": 21,
		"./mwlCalendarMonth.js": 23,
		"./mwlCalendarSlideBox.js": 25,
		"./mwlCalendarWeek.js": 27,
		"./mwlCalendarYear.js": 29,
		"./mwlCollapseFallback.js": 31,
		"./mwlDateModifier.js": 32,
		"./mwlDraggable.js": 33,
		"./mwlDroppable.js": 34,
		"./mwlElementDimensions.js": 35,
		"./mwlResizable.js": 36
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 16;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarCtrl', ["$scope", "$log", "$timeout", "$attrs", "$locale", "moment", "calendarTitle", function($scope, $log, $timeout, $attrs, $locale, moment, calendarTitle) {

	    var vm = this;

	    vm.events = vm.events || [];

	    vm.changeView = function(view, newDay) {
	      vm.view = view;
	      vm.currentDay = newDay;
	    };

	    vm.drillDown = function(date) {

	      var rawDate = moment(date).toDate();

	      var nextView = {
	        year: 'month',
	        month: 'day',
	        week: 'day'
	      };

	      if (vm.onDrillDownClick({calendarDate: rawDate, calendarNextView: nextView[vm.view]}) !== false) {
	        vm.changeView(nextView[vm.view], rawDate);
	      }

	    };

	    var previousDate = moment(vm.currentDay);
	    var previousView = vm.view;

	    function eventIsValid(event) {
	      if (!event.startsAt) {
	        $log.warn('Bootstrap calendar: ', 'Event is missing the startsAt field', event);
	      }

	      if (!angular.isDate(event.startsAt)) {
	        $log.warn('Bootstrap calendar: ', 'Event startsAt should be a javascript date object', event);
	      }

	      if (angular.isDefined(event.endsAt)) {
	        if (!angular.isDate(event.endsAt)) {
	          $log.warn('Bootstrap calendar: ', 'Event endsAt should be a javascript date object', event);
	        }
	        if (moment(event.startsAt).isAfter(moment(event.endsAt))) {
	          $log.warn('Bootstrap calendar: ', 'Event cannot start after it finishes', event);
	        }
	      }

	      return true;
	    }

	    function refreshCalendar() {

	      if (calendarTitle[vm.view] && angular.isDefined($attrs.viewTitle)) {
	        vm.viewTitle = calendarTitle[vm.view](vm.currentDay);
	      }

	      vm.events = vm.events.filter(eventIsValid).map(function(event, index) {
	        Object.defineProperty(event, '$id', {enumerable: false, configurable: true, value: index});
	        return event;
	      });

	      //if on-timespan-click="calendarDay = calendarDate" is set then don't update the view as nothing needs to change
	      var currentDate = moment(vm.currentDay);
	      var shouldUpdate = true;
	      if (
	        previousDate.clone().startOf(vm.view).isSame(currentDate.clone().startOf(vm.view)) &&
	        !previousDate.isSame(currentDate) &&
	        vm.view === previousView
	      ) {
	        shouldUpdate = false;
	      }
	      previousDate = currentDate;
	      previousView = vm.view;

	      if (shouldUpdate) {
	        // a $timeout is required as $broadcast is synchronous so if a new events array is set the calendar won't update
	        $timeout(function() {
	          $scope.$broadcast('calendar.refreshView');
	        });
	      }
	    }

	    var eventsWatched = false;

	    //Refresh the calendar when any of these variables change.
	    $scope.$watchGroup([
	      'vm.currentDay',
	      'vm.view',
	      'vm.cellIsOpen',
	      function() {
	        return moment.locale() + $locale.id; //Auto update the calendar when the locale changes
	      }
	    ], function() {
	      if (!eventsWatched) {
	        eventsWatched = true;
	        //need to deep watch events hence why it isn't included in the watch group
	        $scope.$watch('vm.events', refreshCalendar, true); //this will call refreshCalendar when the watcher starts (i.e. now)
	      } else {
	        refreshCalendar();
	      }
	    });

	  }])
	  .directive('mwlCalendar', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      template: calendarUseTemplates ? __webpack_require__(18) : '',
	      restrict: 'EA',
	      scope: {
	        events: '=',
	        view: '=',
	        viewTitle: '=?',
	        currentDay: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '=',
	        cellIsOpen: '=',
	        onEventClick: '&',
	        onEventTimesChanged: '&',
	        onEditEventClick: '&',
	        onDeleteEventClick: '&',
	        onTimespanClick: '&',
	        onDrillDownClick: '&',
	        cellModifier: '&',
	        dayViewStart: '@',
	        dayViewEnd: '@',
	        dayViewSplit: '@',
	        monthCellTemplateUrl: '@',
	        monthCellEventsTemplateUrl: '@'
	      },
	      controller: 'MwlCalendarCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-context\" ng-switch=\"vm.view\">\r\n\r\n  <div class=\"alert alert-danger\" ng-switch-default>The value passed to the view attribute of the calendar is not set</div>\r\n\r\n  <div class=\"alert alert-danger\" ng-hide=\"vm.currentDay\">The value passed to current-day attribute of the calendar is not set</div>\r\n\r\n  <mwl-calendar-year\r\n    events=\"vm.events\"\r\n    current-day=\"vm.currentDay\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-edit-event-click=\"vm.onEditEventClick\"\r\n    on-delete-event-click=\"vm.onDeleteEventClick\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    edit-event-html=\"vm.editEventHtml\"\r\n    delete-event-html=\"vm.deleteEventHtml\"\r\n    cell-is-open=\"vm.cellIsOpen\"\r\n    cell-modifier=\"vm.cellModifier\"\r\n    ng-switch-when=\"year\"\r\n  ></mwl-calendar-year>\r\n\r\n  <mwl-calendar-month\r\n    events=\"vm.events\"\r\n    current-day=\"vm.currentDay\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-edit-event-click=\"vm.onEditEventClick\"\r\n    on-delete-event-click=\"vm.onDeleteEventClick\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    edit-event-html=\"vm.editEventHtml\"\r\n    delete-event-html=\"vm.deleteEventHtml\"\r\n    cell-is-open=\"vm.cellIsOpen\"\r\n    cell-modifier=\"vm.cellModifier\"\r\n    cell-template-url=\"{{ vm.monthCellTemplateUrl }}\"\r\n    cell-events-template-url=\"{{ vm.monthCellEventsTemplateUrl }}\"\r\n    ng-switch-when=\"month\"\r\n    ></mwl-calendar-month>\r\n\r\n  <mwl-calendar-week\r\n    events=\"vm.events\"\r\n    current-day=\"vm.currentDay\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    day-view-start=\"vm.dayViewStart\"\r\n    day-view-end=\"vm.dayViewEnd\"\r\n    day-view-split=\"vm.dayViewSplit\"\r\n    ng-switch-when=\"week\"\r\n    ></mwl-calendar-week>\r\n\r\n  <mwl-calendar-day\r\n    events=\"vm.events\"\r\n    current-day=\"vm.currentDay\"\r\n    on-event-click=\"vm.onEventClick\"\r\n    on-event-times-changed=\"vm.onEventTimesChanged\"\r\n    on-timespan-click=\"vm.onTimespanClick\"\r\n    day-view-start=\"vm.dayViewStart\"\r\n    day-view-end=\"vm.dayViewEnd\"\r\n    day-view-split=\"vm.dayViewSplit\"\r\n    ng-switch-when=\"day\"\r\n    ></mwl-calendar-day>\r\n</div>\r\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarDayCtrl', ["$scope", "$sce", "moment", "calendarHelper", "calendarConfig", function($scope, $sce, moment, calendarHelper, calendarConfig) {

	    var vm = this;

	    vm.calendarConfig = calendarConfig;
	    vm.$sce = $sce;

	    $scope.$on('calendar.refreshView', function() {
	      vm.dayViewSplit = vm.dayViewSplit || 30;
	      vm.dayViewHeight = calendarHelper.getDayViewHeight(
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	      vm.view = calendarHelper.getDayView(
	        vm.events,
	        vm.currentDay,
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	    });

	    vm.eventDragComplete = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var newStart = moment(event.startsAt).add(minutesDiff, 'minutes');
	      var newEnd = moment(event.endsAt).add(minutesDiff, 'minutes');
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
	      });
	    };

	    vm.eventDragged = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	    };

	    vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var start = moment(event.startsAt);
	      var end = moment(event.endsAt);
	      if (edge === 'start') {
	        start.add(minutesDiff, 'minutes');
	      } else {
	        end.add(minutesDiff, 'minutes');
	      }
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: start.toDate(),
	        calendarNewEventEnd: end.toDate()
	      });
	    };

	    vm.eventResized = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      if (edge === 'start') {
	        event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	      }
	    };

	  }])
	  .directive('mwlCalendarDay', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      template: calendarUseTemplates ? __webpack_require__(20) : '',
	      restrict: 'EA',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        currentDay: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        onTimespanClick: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '='
	      },
	      controller: 'MwlCalendarDayCtrl as vm',
	      bindToController: true
	    };

	  }]);


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-day-box\">\r\n  <div class=\"row-fluid clearfix cal-row-head\">\r\n    <div class=\"span1 col-xs-1 cal-cell\" ng-bind=\"vm.calendarConfig.i18nStrings.timeLabel\"></div>\r\n    <div class=\"span11 col-xs-11 cal-cell\" ng-bind=\"vm.calendarConfig.i18nStrings.eventsLabel\"></div>\r\n  </div>\r\n\r\n  <div class=\"cal-day-panel clearfix\" ng-style=\"{height: vm.dayViewHeight + 'px'}\">\r\n\r\n    <mwl-calendar-hour-list\r\n      day-view-start=\"vm.dayViewStart\"\r\n      day-view-end=\"vm.dayViewEnd\"\r\n      day-view-split=\"vm.dayViewSplit\"\r\n      on-timespan-click=\"vm.onTimespanClick\"\r\n      current-day=\"vm.currentDay\">\r\n    </mwl-calendar-hour-list>\r\n\r\n    <div\r\n      class=\"pull-left day-event day-highlight\"\r\n      ng-repeat=\"event in vm.view track by event.$id\"\r\n      ng-class=\"'dh-event-' + event.type + ' ' + event.cssClass\"\r\n      ng-style=\"{top: event.top + 'px', left: event.left + 60 + 'px', height: event.height + 'px'}\"\r\n      mwl-draggable=\"event.draggable === true\"\r\n      axis=\"'y'\"\r\n      snap-grid=\"{y: 30}\"\r\n      on-drag=\"vm.eventDragged(event, y)\"\r\n      on-drag-end=\"vm.eventDragComplete(event, y)\"\r\n      mwl-resizable=\"event.resizable === true && event.endsAt\"\r\n      resize-edges=\"{top: true, bottom: true}\"\r\n      on-resize=\"vm.eventResized(event, edge, y)\"\r\n      on-resize-end=\"vm.eventResizeComplete(event, edge, y)\">\r\n\r\n      <span class=\"cal-hours\">\r\n        <span ng-show=\"event.top == 0\"><span ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'day':true\"></span>, </span>\r\n        <span ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\"></span>\r\n      </span>\r\n      <a href=\"javascript:;\" class=\"event-item\" ng-click=\"vm.onEventClick({calendarEvent: event})\">\r\n        <span ng-bind-html=\"vm.$sce.trustAsHtml(event.title) | calendarTruncateEventTitle:20:event.height\"></span>\r\n      </a>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarHourListCtrl', ["$scope", "moment", "calendarConfig", "calendarHelper", function($scope, moment, calendarConfig, calendarHelper) {
	    var vm = this;
	    var dayViewStart, dayViewEnd;

	    function updateDays() {
	      dayViewStart = moment(vm.dayViewStart || '00:00', 'HH:mm');
	      dayViewEnd = moment(vm.dayViewEnd || '23:00', 'HH:mm');
	      vm.dayViewSplit = parseInt(vm.dayViewSplit);
	      vm.hours = [];
	      var dayCounter = moment(vm.currentDay)
	        .clone()
	        .hours(dayViewStart.hours())
	        .minutes(dayViewStart.minutes())
	        .seconds(dayViewStart.seconds());
	      for (var i = 0; i <= dayViewEnd.diff(dayViewStart, 'hours'); i++) {
	        vm.hours.push({
	          label: calendarHelper.formatDate(dayCounter, calendarConfig.dateFormats.hour),
	          date: dayCounter.clone()
	        });
	        dayCounter.add(1, 'hour');
	      }
	    }

	    var originalLocale = moment.locale();

	    $scope.$on('calendar.refreshView', function() {

	      if (originalLocale !== moment.locale()) {
	        originalLocale = moment.locale();
	        updateDays();
	      }

	    });

	    $scope.$watchGroup([
	      'vm.dayViewStart',
	      'vm.dayViewEnd',
	      'vm.dayViewSplit',
	      'vm.currentDay'
	    ], function() {
	      updateDays();
	    });

	  }])
	  .directive('mwlCalendarHourList', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      restrict: 'EA',
	      template: calendarUseTemplates ? __webpack_require__(22) : '',
	      controller: 'MwlCalendarHourListCtrl as vm',
	      scope: {
	        currentDay: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '=',
	        onTimespanClick: '='
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-day-panel-hour\">\r\n\r\n  <div class=\"cal-day-hour\" ng-repeat=\"hour in vm.hours track by $index\">\r\n\r\n    <div\r\n      class=\"row-fluid cal-day-hour-part\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.toDate()})\">\r\n      <div class=\"span1 col-xs-1\"><strong ng-bind=\"hour.label\"></strong></div>\r\n      <div class=\"span11 col-xs-11\"></div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"row-fluid cal-day-hour-part\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit, 'minutes').toDate()})\">\r\n      <div class=\"span1 col-xs-1\"></div>\r\n      <div class=\"span11 col-xs-11\"></div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"row-fluid cal-day-hour-part\"\r\n      ng-show=\"vm.dayViewSplit < 30\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 2, 'minutes').toDate()})\">\r\n      <div class=\"span1 col-xs-1\"></div>\r\n      <div class=\"span11 col-xs-11\"></div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"row-fluid cal-day-hour-part\"\r\n      ng-show=\"vm.dayViewSplit < 30\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 3, 'minutes').toDate()})\">\r\n      <div class=\"span1 col-xs-1\"></div>\r\n      <div class=\"span11 col-xs-11\"></div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"row-fluid cal-day-hour-part\"\r\n      ng-show=\"vm.dayViewSplit < 15\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 4, 'minutes').toDate()})\">\r\n      <div class=\"span1 col-xs-1\"></div>\r\n      <div class=\"span11 col-xs-11\"></div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"row-fluid cal-day-hour-part\"\r\n      ng-show=\"vm.dayViewSplit < 15\"\r\n      ng-click=\"vm.onTimespanClick({calendarDate: hour.date.clone().add(vm.dayViewSplit * 5, 'minutes').toDate()})\">\r\n      <div class=\"span1 col-xs-1\"></div>\r\n      <div class=\"span11 col-xs-11\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarMonthCtrl', ["$scope", "moment", "calendarHelper", "calendarConfig", function($scope, moment, calendarHelper, calendarConfig) {

	    var vm = this;
	    vm.calendarConfig = calendarConfig;

	    $scope.$on('calendar.refreshView', function() {

	      vm.weekDays = calendarHelper.getWeekDayNames();

	      vm.view = calendarHelper.getMonthView(vm.events, vm.currentDay, vm.cellModifier);
	      var rows = Math.floor(vm.view.length / 7);
	      vm.monthOffsets = [];
	      for (var i = 0; i < rows; i++) {
	        vm.monthOffsets.push(i * 7);
	      }

	      //Auto open the calendar to the current day if set
	      vm.openDayIndex = null;
	      if (vm.cellIsOpen) {
	        vm.view.forEach(function(day) {
	          if (day.inMonth && moment(vm.currentDay).startOf('day').isSame(day.date)) {
	            vm.dayClicked(day, true);
	          }
	        });
	      }

	    });

	    vm.dayClicked = function(day, dayClickedFirstRun, $event) {

	      if (!dayClickedFirstRun) {
	        vm.onTimespanClick({
	          calendarDate: day.date.toDate(),
	          $event: $event
	        });
	        if ($event && $event.defaultPrevented) {
	          return;
	        }
	      }

	      vm.openRowIndex = null;
	      var dayIndex = vm.view.indexOf(day);
	      if (dayIndex === vm.openDayIndex) { //the day has been clicked and is already open
	        vm.openDayIndex = null; //close the open day
	        vm.cellIsOpen = false;
	      } else {
	        vm.openDayIndex = dayIndex;
	        vm.openRowIndex = Math.floor(dayIndex / 7);
	        vm.cellIsOpen = true;
	      }

	    };

	    vm.highlightEvent = function(event, shouldAddClass) {

	      vm.view.forEach(function(day) {
	        delete day.highlightClass;
	        if (shouldAddClass) {
	          var dayContainsEvent = day.events.indexOf(event) > -1;
	          if (dayContainsEvent) {
	            day.highlightClass = 'day-highlight dh-event-' + event.type;
	          }
	        }
	      });

	    };

	    vm.handleEventDrop = function(event, newDayDate) {

	      var newStart = moment(event.startsAt)
	        .date(moment(newDayDate).date())
	        .month(moment(newDayDate).month());

	      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarDate: newDayDate,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: newEnd ? newEnd.toDate() : null
	      });
	    };

	  }])
	  .directive('mwlCalendarMonth', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      template: calendarUseTemplates ? __webpack_require__(24) : '',
	      restrict: 'EA',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        currentDay: '=',
	        onEventClick: '=',
	        onEditEventClick: '=',
	        onDeleteEventClick: '=',
	        onEventTimesChanged: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '=',
	        cellIsOpen: '=',
	        onTimespanClick: '=',
	        cellModifier: '=',
	        cellTemplateUrl: '@',
	        cellEventsTemplateUrl: '@'
	      },
	      controller: 'MwlCalendarMonthCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-row-fluid cal-row-head\">\r\n\r\n  <div class=\"cal-cell1\" ng-repeat=\"day in vm.weekDays track by $index\" ng-bind=\"day\"></div>\r\n\r\n</div>\r\n<div class=\"cal-month-box\">\r\n\r\n  <div\r\n    ng-repeat=\"rowOffset in vm.monthOffsets track by rowOffset\"\r\n    ng-mouseenter=\"rowHovered = true\"\r\n    ng-mouseleave=\"rowHovered = false\">\r\n    <div class=\"cal-row-fluid cal-before-eventlist\">\r\n      <div\r\n        ng-repeat=\"day in vm.view | calendarLimitTo:7:rowOffset track by $index\"\r\n        ng-init=\"dayIndex = vm.view.indexOf(day)\"\r\n        class=\"cal-cell1 cal-cell {{ day.highlightClass }}\"\r\n        ng-click=\"vm.dayClicked(day, false, $event)\"\r\n        ng-class=\"{pointer: day.events.length > 0}\">\r\n        <ng-include src=\"vm.cellTemplateUrl || 'calendarMonthCell.html'\"></ng-include>\r\n      </div>\r\n    </div>\r\n\r\n    <mwl-calendar-slide-box\r\n      is-open=\"vm.openRowIndex === $index && vm.view[vm.openDayIndex].events.length > 0\"\r\n      events=\"vm.view[vm.openDayIndex].events\"\r\n      on-event-click=\"vm.onEventClick\"\r\n      edit-event-html=\"vm.editEventHtml\"\r\n      on-edit-event-click=\"vm.onEditEventClick\"\r\n      delete-event-html=\"vm.deleteEventHtml\"\r\n      on-delete-event-click=\"vm.onDeleteEventClick\">\r\n    </mwl-calendar-slide-box>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarSlideBoxCtrl', ["$sce", "$scope", "$timeout", "calendarConfig", function($sce, $scope, $timeout, calendarConfig) {

	    var vm = this;
	    vm.$sce = $sce;
	    vm.calendarConfig = calendarConfig;

	    vm.isCollapsed = true;
	    $scope.$watch('vm.isOpen', function(isOpen) {
	      //events must be populated first to set the element height before animation will work
	      $timeout(function() {
	        vm.isCollapsed = !isOpen;
	      });
	    });

	  }])
	  .directive('mwlCalendarSlideBox', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      restrict: 'EA',
	      template: calendarUseTemplates ? __webpack_require__(26) : '',
	      replace: true,
	      controller: 'MwlCalendarSlideBoxCtrl as vm',
	      require: ['^?mwlCalendarMonth', '^?mwlCalendarYear'],
	      link: function(scope, elm, attrs, ctrls) {
	        scope.isMonthView = !!ctrls[0];
	        scope.isYearView = !!ctrls[1];
	      },
	      scope: {
	        isOpen: '=',
	        events: '=',
	        onEventClick: '=',
	        editEventHtml: '=',
	        onEditEventClick: '=',
	        deleteEventHtml: '=',
	        onDeleteEventClick: '='
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-slide-box\" uib-collapse=\"vm.isCollapsed\" mwl-collapse-fallback=\"vm.isCollapsed\">\r\n  <div class=\"cal-slide-content cal-event-list\">\r\n    <ul class=\"unstyled list-unstyled\">\r\n\r\n      <li\r\n        ng-repeat=\"event in vm.events | orderBy:'startsAt' track by event.$id\"\r\n        mwl-draggable=\"event.draggable === true\"\r\n        drop-data=\"{event: event}\">\r\n        <span class=\"pull-left event\" ng-class=\"[event.cssClass, 'event-' + event.type]\"></span>\r\n        &nbsp;\r\n        <a\r\n          href=\"javascript:;\"\r\n          class=\"event-item\"\r\n          ng-click=\"vm.onEventClick({calendarEvent: event})\">\r\n          <span ng-bind-html=\"vm.$sce.trustAsHtml(event.title)\"></span>\r\n          (<span ng-bind=\"event.startsAt | calendarDate:(isMonthView ? 'time' : 'datetime'):true\"></span><span ng-if=\"vm.calendarConfig.displayEventEndTimes && event.endsAt\"> - <span ng-bind=\"event.endsAt | calendarDate:(isMonthView ? 'time' : 'datetime'):true\"></span></span>)\r\n        </a>\r\n\r\n        <a\r\n          href=\"javascript:;\"\r\n          class=\"event-item-edit\"\r\n          ng-if=\"vm.editEventHtml && event.editable !== false\"\r\n          ng-bind-html=\"vm.$sce.trustAsHtml(vm.editEventHtml)\"\r\n          ng-click=\"vm.onEditEventClick({calendarEvent: event})\">\r\n        </a>\r\n\r\n        <a\r\n          href=\"javascript:;\"\r\n          class=\"event-item-delete\"\r\n          ng-if=\"vm.deleteEventHtml && event.deletable !== false\"\r\n          ng-bind-html=\"vm.$sce.trustAsHtml(vm.deleteEventHtml)\"\r\n          ng-click=\"vm.onDeleteEventClick({calendarEvent: event})\">\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarWeekCtrl', ["$scope", "$sce", "moment", "calendarHelper", "calendarConfig", function($scope, $sce, moment, calendarHelper, calendarConfig) {

	    var vm = this;

	    vm.showTimes = calendarConfig.showTimesOnWeekView;
	    vm.$sce = $sce;

	    $scope.$on('calendar.refreshView', function() {
	      vm.dayViewSplit = vm.dayViewSplit || 30;
	      vm.dayViewHeight = calendarHelper.getDayViewHeight(
	        vm.dayViewStart,
	        vm.dayViewEnd,
	        vm.dayViewSplit
	      );

	      vm.view = calendarHelper.getWeekView(vm.events, vm.currentDay, vm.showTimes);
	      if (vm.showTimes) {
	        vm.viewWithTimes = calendarHelper.getWeekViewWithTimes(
	          vm.events,
	          vm.currentDay,
	          vm.dayViewStart,
	          vm.dayViewEnd,
	          vm.dayViewSplit
	        );
	      }
	    });

	    vm.weekDragged = function(event, daysDiff, minuteChunksMoved) {

	      var newStart = moment(event.startsAt).add(daysDiff, 'days');
	      var newEnd = moment(event.endsAt).add(daysDiff, 'days');

	      if (minuteChunksMoved) {
	        var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	        newStart = newStart.add(minutesDiff, 'minutes');
	        newEnd = newEnd.add(minutesDiff, 'minutes');
	      }

	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: event.endsAt ? newEnd.toDate() : null
	      });
	    };

	    vm.weekResized = function(event, edge, daysDiff) {

	      var start = moment(event.startsAt);
	      var end = moment(event.endsAt);
	      if (edge === 'start') {
	        start.add(daysDiff, 'days');
	      } else {
	        end.add(daysDiff, 'days');
	      }

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: start.toDate(),
	        calendarNewEventEnd: end.toDate()
	      });

	    };

	    vm.tempTimeChanged = function(event, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	    };

	    vm.eventResizeComplete = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      var start = moment(event.startsAt);
	      var end = moment(event.endsAt);
	      if (edge === 'start') {
	        start.add(minutesDiff, 'minutes');
	      } else {
	        end.add(minutesDiff, 'minutes');
	      }
	      delete event.tempStartsAt;

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarNewEventStart: start.toDate(),
	        calendarNewEventEnd: end.toDate()
	      });
	    };

	    vm.eventResized = function(event, edge, minuteChunksMoved) {
	      var minutesDiff = minuteChunksMoved * vm.dayViewSplit;
	      if (edge === 'start') {
	        event.tempStartsAt = moment(event.startsAt).add(minutesDiff, 'minutes').toDate();
	      }
	    };

	  }])
	  .directive('mwlCalendarWeek', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      template: calendarUseTemplates ? __webpack_require__(28) : '',
	      restrict: 'EA',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        currentDay: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        dayViewStart: '=',
	        dayViewEnd: '=',
	        dayViewSplit: '='
	      },
	      controller: 'MwlCalendarWeekCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-week-box\" ng-class=\"{'cal-day-box': vm.showTimes}\">\r\n  <div class=\"cal-row-fluid cal-row-head\">\r\n\r\n    <div\r\n      class=\"cal-cell1\"\r\n      ng-repeat=\"day in vm.view.days track by $index\"\r\n      ng-class=\"{\r\n        'cal-day-weekend': day.isWeekend,\r\n        'cal-day-past': day.isPast,\r\n        'cal-day-today': day.isToday,\r\n        'cal-day-future': day.isFuture}\"\r\n      mwl-element-dimensions=\"vm.dayColumnDimensions\">\r\n\r\n      <span ng-bind=\"day.weekDayLabel\"></span>\r\n      <br>\r\n      <small>\r\n        <span\r\n          data-cal-date\r\n          ng-click=\"vm.calendarCtrl.drillDown(day.date)\"\r\n          class=\"pointer\"\r\n          ng-bind=\"day.dayLabel\">\r\n        </span>\r\n      </small>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"cal-day-panel clearfix\" ng-style=\"{height: vm.showTimes ? (vm.dayViewHeight + 'px') : 'auto'}\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div\r\n          class=\"cal-row-fluid\"\r\n          ng-repeat=\"event in vm.view.events track by event.$id\">\r\n          <div\r\n            ng-class=\"'cal-cell' + event.daySpan + ' cal-offset' + event.dayOffset + ' day-highlight dh-event-' + event.type + ' ' + event.cssClass\"\r\n            ng-style=\"{top: 'auto', position: 'inherit'}\"\r\n            data-event-class\r\n            mwl-draggable=\"event.draggable === true\"\r\n            axis=\"'x'\"\r\n            snap-grid=\"{x: vm.dayColumnDimensions.width}\"\r\n            on-drag=\"vm.tempTimeChanged(event, y)\"\r\n            on-drag-end=\"vm.weekDragged(event, x, y)\"\r\n            mwl-resizable=\"event.resizable === true && event.endsAt\"\r\n            resize-edges=\"{left: true, right: true}\"\r\n            on-resize-end=\"vm.weekResized(event, edge, x)\">\r\n            <strong ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\" ng-show=\"vm.showTimes\"></strong>\r\n            <a\r\n              href=\"javascript:;\"\r\n              ng-click=\"vm.onEventClick({calendarEvent: event})\"\r\n              class=\"event-item\"\r\n              ng-bind-html=\"vm.$sce.trustAsHtml(event.title)\"\r\n              tooltip-html-unsafe=\"{{ event.title }}\"\r\n              tooltip-placement=\"left\"\r\n              tooltip-append-to-body=\"true\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <mwl-calendar-hour-list\r\n      day-view-start=\"vm.dayViewStart\"\r\n      day-view-end=\"vm.dayViewEnd\"\r\n      day-view-split=\"vm.dayViewSplit\"\r\n      current-day=\"vm.currentDay\"\r\n      ng-if=\"vm.showTimes\">\r\n    </mwl-calendar-hour-list>\r\n    <div ng-if=\"vm.showTimes\">\r\n      <div class=\"col-xs-12\">\r\n        <div\r\n          class=\"cal-row-fluid\"\r\n          ng-repeat=\"event in vm.viewWithTimes.events track by event.$id\">\r\n          <div\r\n            ng-class=\"'cal-cell' + 1 + ' cal-offset' + event.dayOffset + ' day-highlight dh-event-' + event.type + ' ' + event.cssClass\"\r\n            ng-style=\"{top: ((event.top + 2) + 'px'), position: 'absolute', height: event.height + 'px', left: event.left + '%', width: event.width + '%'}\"\r\n            data-event-class\r\n            mwl-draggable=\"event.draggable === true\"\r\n            axis=\"vm.showTimes ? 'xy' : 'x'\"\r\n            snap-grid=\"{x: vm.dayColumnDimensions.width, y: 30}\"\r\n            on-drag=\"vm.tempTimeChanged(event, y)\"\r\n            on-drag-end=\"vm.weekDragged(event, x, y)\"\r\n            mwl-resizable=\"event.resizable === true && event.endsAt\"\r\n            resize-edges=\"{top: true, bottom: true}\"\r\n            on-resize=\"vm.eventResized(event, edge, y)\"\r\n            on-resize-end=\"vm.eventResizeComplete(event, edge, y)\">\r\n            <strong ng-bind=\"(event.tempStartsAt || event.startsAt) | calendarDate:'time':true\"></strong>\r\n            <a\r\n              href=\"javascript:;\"\r\n              ng-click=\"vm.onEventClick({calendarEvent: event})\"\r\n              class=\"event-item\"\r\n              ng-bind-html=\"vm.$sce.trustAsHtml(event.title)\"\r\n              uib-tooltip-html=\"event.title | calendarTrustAsHtml\"\r\n              tooltip-placement=\"left\"\r\n              tooltip-append-to-body=\"true\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCalendarYearCtrl', ["$scope", "moment", "calendarHelper", function($scope, moment, calendarHelper) {

	    var vm = this;

	    $scope.$on('calendar.refreshView', function() {
	      vm.view = calendarHelper.getYearView(vm.events, vm.currentDay, vm.cellModifier);

	      //Auto open the calendar to the current day if set
	      vm.openMonthIndex = null;
	      if (vm.cellIsOpen) {
	        vm.view.forEach(function(month) {
	          if (moment(vm.currentDay).startOf('month').isSame(month.date)) {
	            vm.monthClicked(month, true);
	          }
	        });
	      }

	    });

	    vm.monthClicked = function(month, monthClickedFirstRun, $event) {

	      if (!monthClickedFirstRun) {
	        vm.onTimespanClick({
	          calendarDate: month.date.toDate(),
	          $event: $event
	        });
	        if ($event && $event.defaultPrevented) {
	          return;
	        }
	      }

	      vm.openRowIndex = null;
	      var monthIndex = vm.view.indexOf(month);
	      if (monthIndex === vm.openMonthIndex) { //the month has been clicked and is already open
	        vm.openMonthIndex = null; //close the open month
	        vm.cellIsOpen = false;
	      } else {
	        vm.openMonthIndex = monthIndex;
	        vm.openRowIndex = Math.floor(monthIndex / 4);
	        vm.cellIsOpen = true;
	      }

	    };

	    vm.handleEventDrop = function(event, newMonthDate) {
	      var newStart = moment(event.startsAt).month(moment(newMonthDate).month());
	      var newEnd = calendarHelper.adjustEndDateFromStartDiff(event.startsAt, newStart, event.endsAt);

	      vm.onEventTimesChanged({
	        calendarEvent: event,
	        calendarDate: newMonthDate,
	        calendarNewEventStart: newStart.toDate(),
	        calendarNewEventEnd: newEnd ? newEnd.toDate() : null
	      });
	    };

	  }])
	  .directive('mwlCalendarYear', ["calendarUseTemplates", function(calendarUseTemplates) {

	    return {
	      template: calendarUseTemplates ? __webpack_require__(30) : '',
	      restrict: 'EA',
	      require: '^mwlCalendar',
	      scope: {
	        events: '=',
	        currentDay: '=',
	        onEventClick: '=',
	        onEventTimesChanged: '=',
	        onEditEventClick: '=',
	        onDeleteEventClick: '=',
	        editEventHtml: '=',
	        deleteEventHtml: '=',
	        cellIsOpen: '=',
	        onTimespanClick: '=',
	        cellModifier: '='
	      },
	      controller: 'MwlCalendarYearCtrl as vm',
	      link: function(scope, element, attrs, calendarCtrl) {
	        scope.vm.calendarCtrl = calendarCtrl;
	      },
	      bindToController: true
	    };

	  }]);


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"cal-year-box\">\r\n  <div ng-repeat=\"rowOffset in [0, 4, 8] track by rowOffset\">\r\n    <div class=\"row cal-before-eventlist\">\r\n      <div\r\n        class=\"span3 col-md-3 col-xs-6 cal-cell {{ day.cssClass }}\"\r\n        ng-repeat=\"month in vm.view | calendarLimitTo:4:rowOffset track by $index\"\r\n        ng-init=\"monthIndex = vm.view.indexOf(month)\"\r\n        ng-click=\"vm.monthClicked(month, false, $event)\"\r\n        ng-class=\"{pointer: month.events.length > 0, 'cal-day-today': month.isToday}\"\r\n        mwl-droppable\r\n        on-drop=\"vm.handleEventDrop(dropData.event, month.date)\">\r\n\r\n        <span\r\n          class=\"pull-right\"\r\n          data-cal-date\r\n          ng-click=\"vm.calendarCtrl.drillDown(month.date)\"\r\n          ng-bind=\"month.label\">\r\n        </span>\r\n\r\n        <small\r\n          class=\"cal-events-num badge badge-important pull-left\"\r\n          ng-show=\"month.badgeTotal > 0\"\r\n          ng-bind=\"month.badgeTotal\">\r\n        </small>\r\n\r\n        <div\r\n          class=\"cal-day-tick\"\r\n          ng-show=\"monthIndex === vm.openMonthIndex && vm.view[vm.openMonthIndex].events.length > 0\">\r\n          <i class=\"glyphicon glyphicon-chevron-up\"></i>\r\n          <i class=\"fa fa-chevron-up\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <mwl-calendar-slide-box\r\n      is-open=\"vm.openRowIndex === $index && vm.view[vm.openMonthIndex].events.length > 0\"\r\n      events=\"vm.view[vm.openMonthIndex].events\"\r\n      on-event-click=\"vm.onEventClick\"\r\n      edit-event-html=\"vm.editEventHtml\"\r\n      on-edit-event-click=\"vm.onEditEventClick\"\r\n      delete-event-html=\"vm.deleteEventHtml\"\r\n      on-delete-event-click=\"vm.onDeleteEventClick\">\r\n    </mwl-calendar-slide-box>\r\n\r\n  </div>\r\n\r\n</div>\r\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlCollapseFallbackCtrl', ["$scope", "$attrs", "$element", function($scope, $attrs, $element) {

	    $scope.$watch($attrs.mwlCollapseFallback, function(shouldCollapse) {
	      if (shouldCollapse) {
	        $element.addClass('ng-hide');
	      } else {
	        $element.removeClass('ng-hide');
	      }
	    });

	  }])
	  .directive('mwlCollapseFallback', ["$injector", function($injector) {

	    if ($injector.has('uibCollapseDirective')) {
	      return {};
	    }

	    return {
	      restrict: 'A',
	      controller: 'MwlCollapseFallbackCtrl'
	    };

	  }]);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDateModifierCtrl', ["$element", "$attrs", "$scope", "moment", function($element, $attrs, $scope, moment) {

	    var vm = this;

	    function onClick() {
	      if (angular.isDefined($attrs.setToToday)) {
	        vm.date = new Date();
	      } else if (angular.isDefined($attrs.increment)) {
	        vm.date = moment(vm.date).add(1, vm.increment).toDate();
	      } else if (angular.isDefined($attrs.decrement)) {
	        vm.date = moment(vm.date).subtract(1, vm.decrement).toDate();
	      }
	      $scope.$apply();
	    }

	    $element.bind('click', onClick);

	    $scope.$on('$destroy', function() {
	      $element.unbind('click', onClick);
	    });

	  }])
	  .directive('mwlDateModifier', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDateModifierCtrl as vm',
	      scope: {
	        date: '=',
	        increment: '=',
	        decrement: '='
	      },
	      bindToController: true
	    };

	  });


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDraggableCtrl', ["$element", "$scope", "$window", "$parse", "$attrs", "interact", function($element, $scope, $window, $parse, $attrs, interact) {

	    if (!interact) {
	      return;
	    }

	    var snap, snapGridDimensions;
	    if ($attrs.snapGrid) {
	      snapGridDimensions = $parse($attrs.snapGrid)($scope);
	      snap = {
	        targets: [
	          interact.createSnapGrid(snapGridDimensions)
	        ]
	      };
	    }

	    function translateElement(elm, transformValue) {
	      return elm
	        .css('-ms-transform', transformValue)
	        .css('-webkit-transform', transformValue)
	        .css('transform', transformValue);
	    }

	    function canDrag() {
	      return $parse($attrs.mwlDraggable)($scope);
	    }

	    function getUnitsMoved(x, y, gridDimensions) {

	      var result = {x: x, y: y};

	      if (gridDimensions && gridDimensions.x) {
	        result.x /= gridDimensions.x;
	      }

	      if (gridDimensions && gridDimensions.y) {
	        result.y /= gridDimensions.y;
	      }

	      return result;

	    }

	    interact($element[0]).draggable({
	      snap: snap,
	      onstart: function(event) {
	        if (canDrag()) {
	          angular.element(event.target).addClass('dragging-active');
	          event.target.dropData = $parse($attrs.dropData)($scope);
	          event.target.style.pointerEvents = 'none';
	          if ($attrs.onDragStart) {
	            $parse($attrs.onDragStart)($scope);
	            $scope.$apply();
	          }
	        }
	      },
	      onmove: function(event) {

	        if (canDrag()) {
	          var elm = angular.element(event.target);
	          var x = (parseFloat(elm.attr('data-x')) || 0) + (event.dx || 0);
	          var y = (parseFloat(elm.attr('data-y')) || 0) + (event.dy || 0);

	          switch ($parse($attrs.axis)($scope)) {
	            case 'x':
	              y = 0;
	              break;

	            case 'y':
	              x = 0;
	              break;

	            default:
	          }

	          if ($window.getComputedStyle(elm[0]).position === 'static') {
	            elm.css('position', 'relative');
	          }

	          translateElement(elm, 'translate(' + x + 'px, ' + y + 'px)')
	            .css('z-index', 1000)
	            .attr('data-x', x)
	            .attr('data-y', y);

	          if ($attrs.onDrag) {
	            $parse($attrs.onDrag)($scope, getUnitsMoved(x, y, snapGridDimensions));
	            $scope.$apply();
	          }
	        }

	      },
	      onend: function(event) {

	        if (canDrag()) {
	          var elm = angular.element(event.target);
	          var x = elm.attr('data-x');
	          var y = elm.attr('data-y');

	          event.target.style.pointerEvents = 'auto';
	          if ($attrs.onDragEnd) {
	            $parse($attrs.onDragEnd)($scope, getUnitsMoved(x, y, snapGridDimensions));
	            $scope.$apply();
	          }

	          translateElement(elm, '')
	            .removeAttr('data-x')
	            .removeAttr('data-y')
	            .removeClass('dragging-active');
	        }

	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlDraggable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDraggableCtrl'
	    };

	  });


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlDroppableCtrl', ["$element", "$scope", "$parse", "$attrs", "interact", function($element, $scope, $parse, $attrs, interact) {

	    if (!interact) {
	      return;
	    }

	    interact($element[0]).dropzone({
	      ondragenter: function(event) {
	        angular.element(event.target).addClass('drop-active');
	      },
	      ondragleave: function(event) {
	        angular.element(event.target).removeClass('drop-active');
	      },
	      ondropdeactivate: function(event) {
	        angular.element(event.target).removeClass('drop-active');
	      },
	      ondrop: function(event) {
	        if (event.relatedTarget.dropData) {
	          $parse($attrs.onDrop)($scope, {dropData: event.relatedTarget.dropData});
	          $scope.$apply();
	        }
	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlDroppable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlDroppableCtrl'
	    };

	  });


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlElementDimensionsCtrl', ["$element", "$scope", "$parse", "$attrs", function($element, $scope, $parse, $attrs) {

	    $parse($attrs.mwlElementDimensions).assign($scope, {
	      width: $element[0].offsetWidth,
	      height: $element[0].offsetHeight
	    });

	  }])
	  .directive('mwlElementDimensions', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlElementDimensionsCtrl'
	    };

	  });


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .controller('MwlResizableCtrl', ["$element", "$scope", "$parse", "$attrs", "interact", function($element, $scope, $parse, $attrs, interact) {

	    if (!interact) {
	      return;
	    }

	    var snap, snapGridDimensions;
	    if ($attrs.snapGrid) {
	      snapGridDimensions = $parse($attrs.snapGrid)($scope);
	      snap = {
	        targets: [
	          interact.createSnapGrid(snapGridDimensions)
	        ]
	      };
	    }

	    var originalDimensions = {};
	    var originalDimensionsStyle = {};
	    var resizeEdge;

	    function canResize() {
	      return $parse($attrs.mwlResizable)($scope);
	    }

	    function getUnitsResized(edge, elm, gridDimensions) {
	      var unitsResized = {};
	      unitsResized.edge = edge;
	      if (edge === 'start') {
	        unitsResized.x = elm.data('x');
	        unitsResized.y = elm.data('y');
	      } else if (edge === 'end') {
	        unitsResized.x = parseFloat(elm.css('width').replace('px', '')) - originalDimensions.width;
	        unitsResized.y = parseFloat(elm.css('height').replace('px', '')) - originalDimensions.height;
	      }
	      if (gridDimensions && gridDimensions.x) {
	        unitsResized.x = Math.round(unitsResized.x / gridDimensions.x);
	      }
	      if (gridDimensions && gridDimensions.y) {
	        unitsResized.y = Math.round(unitsResized.y / gridDimensions.y);
	      }
	      return unitsResized;
	    }

	    interact($element[0]).resizable({
	      edges: $parse($attrs.resizeEdges)($scope),
	      snap: snap,
	      onstart: function(event) {

	        if (canResize()) {
	          resizeEdge = 'end';
	          var elm = angular.element(event.target);
	          originalDimensions.height = elm[0].offsetHeight;
	          originalDimensions.width = elm[0].offsetWidth;
	          originalDimensionsStyle.height = elm.css('height');
	          originalDimensionsStyle.width = elm.css('width');
	        }

	      },
	      onmove: function(event) {

	        if (canResize()) {
	          var elm = angular.element(event.target);
	          var x = parseFloat(elm.data('x') || 0);
	          var y = parseFloat(elm.data('y') || 0);

	          elm.css({
	            width: event.rect.width + 'px',
	            height: event.rect.height + 'px'
	          });

	          // translate when resizing from top or left edges
	          x += event.deltaRect.left;
	          y += event.deltaRect.top;

	          elm.css('transform', 'translate(' + x + 'px,' + y + 'px)');

	          elm.data('x', x);
	          elm.data('y', y);

	          if (event.deltaRect.left !== 0 || event.deltaRect.top !== 0) {
	            resizeEdge = 'start';
	          }

	          if ($attrs.onResize) {
	            $parse($attrs.onResize)($scope, getUnitsResized(resizeEdge, elm, snapGridDimensions));
	            $scope.$apply();
	          }

	        }

	      },
	      onend: function(event) {

	        if (canResize()) {

	          var elm = angular.element(event.target);
	          var unitsResized = getUnitsResized(resizeEdge, elm, snapGridDimensions);

	          elm
	            .data('x', null)
	            .data('y', null)
	            .css({
	              transform: '',
	              width: originalDimensionsStyle.width,
	              height: originalDimensionsStyle.height
	            });

	          if ($attrs.onResizeEnd) {
	            $parse($attrs.onResizeEnd)($scope, unitsResized);
	            $scope.$apply();
	          }
	        }

	      }
	    });

	    $scope.$on('$destroy', function() {
	      interact($element[0]).unset();
	    });

	  }])
	  .directive('mwlResizable', function() {

	    return {
	      restrict: 'A',
	      controller: 'MwlResizableCtrl'
	    };

	  });


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendarDate.js": 38,
		"./calendarLimitTo.js": 39,
		"./calendarTruncateEventTitle.js": 40,
		"./calendarTrustAsHtml.js": 41
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 37;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .filter('calendarDate', ["calendarHelper", "calendarConfig", function(calendarHelper, calendarConfig) {

	    function calendarDate(date, format, getFromConfig) {

	      if (getFromConfig === true) {
	        format = calendarConfig.dateFormats[format];
	      }

	      return calendarHelper.formatDate(date, format);

	    }

	    // This is stateful because the locale can change as well
	    // as calendarConfig.dateFormats which would change the value outside of this filter
	    calendarDate.$stateful = true;

	    return calendarDate;

	  }]);


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .filter('calendarLimitTo', ["limitToFilter", function(limitToFilter) {

	    if (angular.version.minor >= 4) { //1.4+ supports the begin attribute
	      return limitToFilter;
	    }

	    //Copied from the angular source. Only 1.4 has the begin functionality.
	    return function(input, limit, begin) {
	      if (Math.abs(Number(limit)) === Infinity) {
	        limit = Number(limit);
	      } else {
	        limit = parseInt(limit);
	      }
	      if (isNaN(limit)) {
	        return input;
	      }

	      if (angular.isNumber(input)) {
	        input = input.toString();
	      }
	      if (!angular.isArray(input) && !angular.isString(input)) {
	        return input;
	      }

	      begin = (!begin || isNaN(begin)) ? 0 : parseInt(begin);
	      begin = (begin < 0 && begin >= -input.length) ? input.length + begin : begin;

	      if (limit >= 0) {
	        return input.slice(begin, begin + limit);
	      } else if (begin === 0) {
	        return input.slice(limit, input.length);
	      } else {
	        return input.slice(Math.max(0, begin + limit), begin);
	      }
	    };

	  }]);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .filter('calendarTruncateEventTitle', function() {

	    return function(string, length, boxHeight) {
	      if (!string) {
	        return '';
	      }

	      //Only truncate if if actually needs truncating
	      if (string.length >= length && string.length / 20 > boxHeight / 30) {
	        return string.substr(0, length) + '...';
	      } else {
	        return string;
	      }
	    };

	  });


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .filter('calendarTrustAsHtml', ["$sce", function($sce) {

	    return function(text) {
	      return $sce.trustAsHtml(text);
	    };

	  }]);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./calendarConfig.js": 43,
		"./calendarHelper.js": 44,
		"./calendarTitle.js": 45,
		"./interact.js": 46,
		"./moment.js": 48
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 42;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .provider('calendarConfig', function() {

	    var defaultFormats = {
	      angular: {
	        date: {
	          hour: 'ha',
	          day: 'd MMM',
	          month: 'MMMM',
	          weekDay: 'EEEE',
	          time: 'HH:mm',
	          datetime: 'MMM d, h:mm a'
	        },
	        title: {
	          day: 'EEEE d MMMM, yyyy',
	          week: 'Week {week} of {year}',
	          month: 'MMMM yyyy',
	          year: 'yyyy'
	        }
	      },
	      moment: {
	        date: {
	          hour: 'ha',
	          day: 'D MMM',
	          month: 'MMMM',
	          weekDay: 'dddd',
	          time: 'HH:mm',
	          datetime: 'MMM D, h:mm a'
	        },
	        title: {
	          day: 'dddd D MMMM, YYYY',
	          week: 'Week {week} of {year}',
	          month: 'MMMM YYYY',
	          year: 'YYYY'
	        }
	      }
	    };

	    var dateFormatter = 'angular';
	    var defaultDateFormats = angular.copy(defaultFormats[dateFormatter].date);
	    var defaultTitleFormats = angular.copy(defaultFormats[dateFormatter].title);
	    var displayEventEndTimes = false;
	    var showTimesOnWeekView = false;
	    var displayAllMonthEvents = false;

	    var i18nStrings = {
	      eventsLabel: 'Events',
	      timeLabel: 'Time',
	      weekNumber: 'Week {week}'
	    };

	    var configProvider = this;

	    configProvider.setDateFormats = function(formats) {
	      angular.extend(defaultDateFormats, formats);
	      return configProvider;
	    };

	    configProvider.setTitleFormats = function(formats) {
	      angular.extend(defaultTitleFormats, formats);
	      return configProvider;
	    };

	    configProvider.setI18nStrings = function(strings) {
	      angular.extend(i18nStrings, strings);
	      return configProvider;
	    };

	    configProvider.setDisplayAllMonthEvents = function(value) {
	      displayAllMonthEvents = value;
	      return configProvider;
	    };

	    configProvider.setDisplayEventEndTimes = function(value) {
	      displayEventEndTimes = value;
	      return configProvider;
	    };

	    configProvider.setDateFormatter = function(value) {
	      if (['angular', 'moment'].indexOf(value) === -1) {
	        throw new Error('Invalid date formatter. Allowed types are angular and moment.');
	      }
	      dateFormatter = value;
	      defaultDateFormats = angular.copy(defaultFormats[dateFormatter].date);
	      defaultTitleFormats = angular.copy(defaultFormats[dateFormatter].title);
	      return configProvider;
	    };

	    configProvider.showTimesOnWeekView = function(value) {
	      showTimesOnWeekView = value; //experimental, and ignores the event end date
	      return configProvider;
	    };

	    configProvider.$get = function() {
	      return {
	        dateFormats: defaultDateFormats,
	        titleFormats: defaultTitleFormats,
	        i18nStrings: i18nStrings,
	        displayAllMonthEvents: displayAllMonthEvents,
	        displayEventEndTimes: displayEventEndTimes,
	        dateFormatter: dateFormatter,
	        showTimesOnWeekView: showTimesOnWeekView
	      };
	    };

	  });


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .factory('calendarHelper', ["dateFilter", "moment", "calendarConfig", function(dateFilter, moment, calendarConfig) {

	    function formatDate(date, format) {
	      if (calendarConfig.dateFormatter === 'angular') {
	        return dateFilter(moment(date).toDate(), format);
	      } else if (calendarConfig.dateFormatter === 'moment') {
	        return moment(date).format(format);
	      }
	    }

	    function adjustEndDateFromStartDiff(oldStart, newStart, oldEnd) {
	      if (!oldEnd) {
	        return oldEnd;
	      }
	      var diffInSeconds = moment(newStart).diff(moment(oldStart));
	      return moment(oldEnd).add(diffInSeconds);
	    }

	    function eventIsInPeriod(event, periodStart, periodEnd) {

	      var eventStart = moment(event.startsAt);
	      var eventEnd = moment(event.endsAt || event.startsAt);
	      periodStart = moment(periodStart);
	      periodEnd = moment(periodEnd);

	      if (angular.isDefined(event.recursOn)) {

	        switch (event.recursOn) {
	          case 'year':
	            eventStart.set({
	              year: periodStart.year()
	            });
	            break;

	          case 'month':
	            eventStart.set({
	              year: periodStart.year(),
	              month: periodStart.month()
	            });
	            break;

	          default:
	            throw new Error('Invalid value (' + event.recursOn + ') given for recurs on. Can only be year or month.');
	        }

	        eventEnd = adjustEndDateFromStartDiff(event.startsAt, eventStart, eventEnd);

	      }

	      return (eventStart.isAfter(periodStart) && eventStart.isBefore(periodEnd)) ||
	        (eventEnd.isAfter(periodStart) && eventEnd.isBefore(periodEnd)) ||
	        (eventStart.isBefore(periodStart) && eventEnd.isAfter(periodEnd)) ||
	        eventStart.isSame(periodStart) ||
	        eventEnd.isSame(periodEnd);

	    }

	    function filterEventsInPeriod(events, startPeriod, endPeriod) {
	      return events.filter(function(event) {
	        return eventIsInPeriod(event, startPeriod, endPeriod);
	      });
	    }

	    function getEventsInPeriod(calendarDate, period, allEvents) {
	      var startPeriod = moment(calendarDate).startOf(period);
	      var endPeriod = moment(calendarDate).endOf(period);
	      return filterEventsInPeriod(allEvents, startPeriod, endPeriod);
	    }

	    function getBadgeTotal(events) {
	      return events.filter(function(event) {
	        return event.incrementsBadgeTotal !== false;
	      }).length;
	    }

	    function getWeekDayNames() {
	      var weekdays = [];
	      var count = 0;
	      while (count < 7) {
	        weekdays.push(formatDate(moment().weekday(count++), calendarConfig.dateFormats.weekDay));
	      }
	      return weekdays;
	    }

	    function getYearView(events, currentDay, cellModifier) {

	      var view = [];
	      var eventsInPeriod = getEventsInPeriod(currentDay, 'year', events);
	      var month = moment(currentDay).startOf('year');
	      var count = 0;
	      while (count < 12) {
	        var startPeriod = month.clone();
	        var endPeriod = startPeriod.clone().endOf('month');
	        var periodEvents = filterEventsInPeriod(eventsInPeriod, startPeriod, endPeriod);
	        var cell = {
	          label: formatDate(startPeriod, calendarConfig.dateFormats.month),
	          isToday: startPeriod.isSame(moment().startOf('month')),
	          events: periodEvents,
	          date: startPeriod,
	          badgeTotal: getBadgeTotal(periodEvents)
	        };

	        cellModifier({calendarCell: cell});
	        view.push(cell);
	        month.add(1, 'month');
	        count++;
	      }

	      return view;

	    }

	    function getMonthView(events, currentDay, cellModifier) {

	      var startOfMonth = moment(currentDay).startOf('month');
	      var day = startOfMonth.clone().startOf('week');
	      var endOfMonthView = moment(currentDay).endOf('month').endOf('week');
	      var eventsInPeriod;
	      if (calendarConfig.displayAllMonthEvents) {
	        eventsInPeriod = filterEventsInPeriod(events, day, endOfMonthView);
	      } else {
	        eventsInPeriod = filterEventsInPeriod(events, startOfMonth, startOfMonth.clone().endOf('month'));
	      }
	      var view = [];
	      var today = moment().startOf('day');

	      while (day.isBefore(endOfMonthView)) {

	        var inMonth = day.month() === moment(currentDay).month();
	        var monthEvents = [];
	        if (inMonth || calendarConfig.displayAllMonthEvents) {
	          monthEvents = filterEventsInPeriod(eventsInPeriod, day, day.clone().endOf('day'));
	        }

	        var cell = {
	          label: day.date(),
	          date: day.clone(),
	          inMonth: inMonth,
	          isPast: today.isAfter(day),
	          isToday: today.isSame(day),
	          isFuture: today.isBefore(day),
	          isWeekend: [0, 6].indexOf(day.day()) > -1,
	          events: monthEvents,
	          badgeTotal: getBadgeTotal(monthEvents)
	        };

	        cellModifier({calendarCell: cell});

	        view.push(cell);

	        day.add(1, 'day');
	      }

	      return view;

	    }

	    function getWeekView(events, currentDay, filterOneDayEvents) {

	      var startOfWeek = moment(currentDay).startOf('week');
	      var endOfWeek = moment(currentDay).endOf('week');
	      var dayCounter = startOfWeek.clone();
	      var days = [];
	      var today = moment().startOf('day');
	      while (days.length < 7) {
	        days.push({
	          weekDayLabel: formatDate(dayCounter, calendarConfig.dateFormats.weekDay),
	          date: dayCounter.clone(),
	          dayLabel: formatDate(dayCounter, calendarConfig.dateFormats.day),
	          isPast: dayCounter.isBefore(today),
	          isToday: dayCounter.isSame(today),
	          isFuture: dayCounter.isAfter(today),
	          isWeekend: [0, 6].indexOf(dayCounter.day()) > -1
	        });
	        dayCounter.add(1, 'day');
	      }

	      if (filterOneDayEvents) {
	        events = events.filter(function(event) {
	          return !moment(event.startsAt).isSame(moment(event.endsAt), 'day');
	        });
	      }

	      var eventsSorted = filterEventsInPeriod(events, startOfWeek, endOfWeek).map(function(event) {

	        var eventStart = moment(event.startsAt).startOf('day');
	        var eventEnd = moment(event.endsAt || event.startsAt).startOf('day');
	        var weekViewStart = moment(startOfWeek).startOf('day');
	        var weekViewEnd = moment(endOfWeek).startOf('day');
	        var offset, span;

	        if (eventStart.isBefore(weekViewStart) || eventStart.isSame(weekViewStart)) {
	          offset = 0;
	        } else {
	          offset = eventStart.diff(weekViewStart, 'days');
	        }

	        if (eventEnd.isAfter(weekViewEnd)) {
	          eventEnd = weekViewEnd;
	        }

	        if (eventStart.isBefore(weekViewStart)) {
	          eventStart = weekViewStart;
	        }

	        span = moment(eventEnd).diff(eventStart, 'days') + 1;

	        event.daySpan = span;
	        event.dayOffset = offset;

	        return event;
	      });

	      return {days: days, events: eventsSorted};

	    }

	    function getCrossingsCount(event, dayEvents) {
	      var eventStart = moment(event.startsAt);
	      var eventEnd = moment(event.endsAt);

	      return dayEvents.filter(function(ev) {

	        return event.$id !== ev.$id &&
	          (moment(ev.startsAt).isBetween(eventStart, eventEnd) ||
	          moment(ev.startsAt).isSame(eventStart) ||
	          moment(ev.endsAt).isBetween(eventStart, eventEnd) ||
	          moment(ev.endsAt).isSame(eventEnd) ||
	          moment(ev.startsAt).isBefore(eventStart) && moment(ev.endsAt).isAfter(eventEnd));
	      }).length;
	    }

	    function eventsComparer(a, b) {
	      var aStart = moment(a.startsAt);
	      var bStart = moment(b.startsAt);

	      if (aStart.isBefore(bStart)) {
	        return -1;
	      }

	      if (aStart.isSame(bStart)) {
	        var aEnd = moment(a.endsAt);
	        var bEnd = moment(b.endsAt);

	        if (aEnd.isSame(bEnd)) {
	          return 0;
	        } else if (aEnd.isAfter(bEnd)) {
	          return -1;
	        }
	        return 1;
	      }
	      return 1;
	    }

	    function getDayView(events, currentDay, dayViewStart, dayViewEnd, dayViewSplit, isWeekViewWithTimes) {
	      var baseBucketWidth = isWeekViewWithTimes ? 14.285714285714285 : 150;
	      var dayStartHour = moment(dayViewStart || '00:00', 'HH:mm').hours();
	      var dayEndHour = moment(dayViewEnd || '23:00', 'HH:mm').hours();
	      var hourHeight = (60 / dayViewSplit) * 30;
	      var calendarStart = moment(currentDay).startOf('day').add(dayStartHour, 'hours');
	      var calendarEnd = moment(currentDay).startOf('day').add(dayEndHour, 'hours');
	      var calendarHeight = (dayEndHour - dayStartHour + 1) * hourHeight;
	      var hourHeightMultiplier = hourHeight / 60;
	      var buckets = [];
	      var eventsInPeriod = filterEventsInPeriod(
	        events,
	        moment(currentDay).startOf('day').toDate(),
	        moment(currentDay).endOf('day').toDate()
	      );

	      return eventsInPeriod.sort(eventsComparer).map(function(event) {
	        if (moment(event.startsAt).isBefore(calendarStart)) {
	          event.top = 0;
	        } else {
	          event.top = (moment(event.startsAt).startOf('minute').diff(calendarStart.startOf('minute'), 'minutes') * hourHeightMultiplier) - 2;
	        }

	        if (moment(event.endsAt || event.startsAt).isAfter(calendarEnd)) {
	          event.height = calendarHeight - event.top;
	        } else {
	          var diffStart = event.startsAt;
	          if (moment(event.startsAt).isBefore(calendarStart)) {
	            diffStart = calendarStart.toDate();
	          }
	          if (!event.endsAt) {
	            event.height = 30;
	          } else {
	            event.height = moment(event.endsAt || event.startsAt).diff(diffStart, 'minutes') * hourHeightMultiplier;
	          }
	        }

	        if (event.top - event.height > calendarHeight) {
	          event.height = 0;
	        }

	        event.left = 0;
	        return event;
	      }).filter(function(event) {
	        return event.height > 0;
	      }).map(function(event) {
	        var cannotFitInABucket = true;
	        buckets.forEach(function(bucket, bucketIndex) {
	          var canFitInThisBucket = true;

	          bucket.forEach(function(bucketItem) {
	            if (eventIsInPeriod(event, bucketItem.startsAt, bucketItem.endsAt || bucketItem.startsAt) ||
	              eventIsInPeriod(bucketItem, event.startsAt, event.endsAt || event.startsAt)) {
	              canFitInThisBucket = false;
	            }
	          });

	          if (canFitInThisBucket && cannotFitInABucket) {
	            cannotFitInABucket = false;
	            event.left = bucketIndex * baseBucketWidth;
	            if (isWeekViewWithTimes) {
	              event.bucketIndex = buckets.length;
	            }
	            buckets[bucketIndex].push(event);
	          }
	        });

	        if (cannotFitInABucket) {
	          event.left = buckets.length * baseBucketWidth;
	          if (isWeekViewWithTimes) {
	            event.bucketIndex = buckets.length;
	          }
	          buckets.push([event]);
	        }
	        return event;
	      }).map(function(event) {
	        if (isWeekViewWithTimes) {
	          event.width = getCrossingsCount(event, eventsInPeriod) > 0 ? baseBucketWidth / buckets.length : baseBucketWidth;
	          event.left = event.bucketIndex * baseBucketWidth / (buckets.length);
	          delete event.bucketIndex;
	        }
	        return event;
	      });
	    }

	    function getWeekViewWithTimes(events, currentDay, dayViewStart, dayViewEnd, dayViewSplit) {
	      var weekView = getWeekView(events, currentDay, false);
	      var newEvents = [];
	      weekView.days.forEach(function(day) {
	        var dayEvents = weekView.events.filter(function(event) {
	          return moment(event.startsAt).isSame(moment(day.date), 'day') &&
	            moment(event.endsAt).isSame(moment(day.date), 'day');
	        });
	        var newDayEvents = getDayView(
	          dayEvents,
	          day.date,
	          dayViewStart,
	          dayViewEnd,
	          dayViewSplit,
	          true
	        );
	        newEvents = newEvents.concat(newDayEvents);
	      });
	      weekView.events = newEvents;
	      return weekView;
	    }

	    function getDayViewHeight(dayViewStart, dayViewEnd, dayViewSplit) {
	      var dayViewStartM = moment(dayViewStart || '00:00', 'HH:mm');
	      var dayViewEndM = moment(dayViewEnd || '23:00', 'HH:mm');
	      var hourHeight = (60 / dayViewSplit) * 30;
	      return ((dayViewEndM.diff(dayViewStartM, 'hours') + 1) * hourHeight) + 2;
	    }

	    return {
	      getWeekDayNames: getWeekDayNames,
	      getYearView: getYearView,
	      getMonthView: getMonthView,
	      getWeekView: getWeekView,
	      getDayView: getDayView,
	      getWeekViewWithTimes: getWeekViewWithTimes,
	      getDayViewHeight: getDayViewHeight,
	      adjustEndDateFromStartDiff: adjustEndDateFromStartDiff,
	      formatDate: formatDate,
	      eventIsInPeriod: eventIsInPeriod, //expose for testing only
	      getCrossingsCount: getCrossingsCount, //expose for testing only
	      eventsComparer: eventsComparer //expose for testing only
	    };

	  }]);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);

	angular
	  .module('mwl.calendar')
	  .factory('calendarTitle', ["moment", "calendarConfig", "calendarHelper", function(moment, calendarConfig, calendarHelper) {

	    function day(currentDay) {
	      return calendarHelper.formatDate(currentDay, calendarConfig.titleFormats.day);
	    }

	    function week(currentDay) {
	      var weekTitleLabel = calendarConfig.titleFormats.week;
	      return weekTitleLabel.replace('{week}', moment(currentDay).week()).replace('{year}', moment(currentDay).format('YYYY'));
	    }

	    function month(currentDay) {
	      return calendarHelper.formatDate(currentDay, calendarConfig.titleFormats.month);
	    }

	    function year(currentDay) {
	      return calendarHelper.formatDate(currentDay, calendarConfig.titleFormats.year);
	    }

	    return {
	      day: day,
	      week: week,
	      month: month,
	      year: year
	    };

	  }]);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);
	var interact;
	try {
	  interact = __webpack_require__(47);
	} catch (e) {
	  /* istanbul ignore next */
	  interact = null;
	}

	angular
	  .module('mwl.calendar')
	  .constant('interact', interact);


/***/ },
/* 47 */
/***/ function(module, exports) {

	if(typeof __WEBPACK_EXTERNAL_MODULE_47__ === 'undefined') {var e = new Error("Cannot find module \"undefined\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
	module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(13);
	var moment = __webpack_require__(49);

	angular
	  .module('mwl.calendar')
	  .constant('moment', moment);


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }
/******/ ])
});
;