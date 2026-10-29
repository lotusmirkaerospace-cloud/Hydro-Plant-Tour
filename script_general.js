(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.Container_96D94F89_879E_EDD5_4198_5FAAF0D2F3D2"],"layout":"absolute","scripts":{"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clone":TDV.Tour.Script.clone,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"openLink":TDV.Tour.Script.openLink,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getKey":TDV.Tour.Script.getKey,"shareSocial":TDV.Tour.Script.shareSocial,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"registerKey":TDV.Tour.Script.registerKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"initAnalytics":TDV.Tour.Script.initAnalytics,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"cloneBindings":TDV.Tour.Script.cloneBindings,"init":TDV.Tour.Script.init,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"executeJS":TDV.Tour.Script.executeJS,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"toggleVR":TDV.Tour.Script.toggleVR,"historyGoForward":TDV.Tour.Script.historyGoForward,"disableVR":TDV.Tour.Script.disableVR,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"enableVR":TDV.Tour.Script.enableVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"createTween":TDV.Tour.Script.createTween,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaByName":TDV.Tour.Script.getMediaByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMapLocation":TDV.Tour.Script.setMapLocation,"getComponentByName":TDV.Tour.Script.getComponentByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizStart":TDV.Tour.Script.quizStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showWindow":TDV.Tour.Script.showWindow,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"isPanorama":TDV.Tour.Script.isPanorama,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setLocale":TDV.Tour.Script.setLocale,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setValue":TDV.Tour.Script.setValue,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer},"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"rate":1,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnQuizQuestion":false},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player740","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"start":"this.init()","backgroundColorRatios":[0],"minHeight":0,"scrollBarColor":"#000000","minWidth":0,"gap":10,"propagateClick":false,"width":"100%","height":"100%","watermark":false,"hash": "60899897462491f6b3255e8c7dba1dda64d6ca3d01a3af4d4daf0c075ed48960", "definitions": [{"class":"PanoramaCamera","initialPosition":{"pitch":-8.87,"class":"PanoramaCameraPosition","yaw":98.58},"id":"panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_camera","initialSequence":"this.sequence_89736167_879E_355D_41D9_967E4C22EF55","enterPointingToHorizon":true},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"rollOverBackgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_881659D9_87A2_5575_41C4_6AA14722FD17","paddingBottom":0,"fontSize":"22px","pressedFontColor":"#FFFFFF","backgroundColor":["#FFFFFF"],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_96285061_87AE_5352_41CA_348E672F138E, 91.59023668639047, -5.755677368833196, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_881659D9_87A2_5575_41C4_6AA14722FD17.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":133.07,"data":{"name":"Original"},"height":40,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","class":"Button","paddingRight":0,"horizontalAlign":"center"},{"layout":"vertical","id":"Container_96D94F89_879E_EDD5_4198_5FAAF0D2F3D2","overflow":"scroll","backgroundOpacity":0,"data":{"name":"Container"},"scrollBarColor":"#000000","right":"0%","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"top":"0%","width":"11.037%","height":"100%","scrollBarMargin":2,"class":"Container","children":["this.Container_97591068_879E_5353_41D9_FB44CDF7D81F"]},{"vfov":180,"frames":[{"cube":{"levels":[{"height":3072,"url":"media/panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_0/{face}/0/{row}_{column}.webp","tags":"ondemand","colCount":18,"rowCount":3,"class":"TiledImageResourceLevel","width":18432},{"height":2048,"url":"media/panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_0/{face}/1/{row}_{column}.webp","tags":"ondemand","colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"height":1024,"url":"media/panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_t.webp"}],"id":"panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29","hfov":360,"data":{"label":"KML Overlay"},"hfovMax":130,"hfovMin":"120%","label":trans('panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29.label'),"class":"Panorama","thumbnailUrl":"media/panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_t.webp"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_96285061_87AE_5352_41CA_348E672F138E","this.PanoramaPlayListItem_96287061_87AE_5352_41D8_744CBA9169B9"],"class":"PlayList"},{"class":"PanoramaCamera","initialPosition":{"pitch":-5.75,"class":"PanoramaCameraPosition","yaw":91.59},"id":"panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_camera","initialSequence":"this.sequence_8D91DAC7_8762_575D_41DF_71EBAA9144B0","enterPointingToHorizon":true},{"layout":"vertical","id":"Container_97591068_879E_5353_41D9_FB44CDF7D81F","overflow":"scroll","backgroundOpacity":0,"data":{"name":"Container"},"scrollBarColor":"#000000","verticalAlign":"middle","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"width":"100%","height":"21.626%","paddingLeft":50,"scrollBarMargin":2,"class":"Container","children":["this.Button_881659D9_87A2_5575_41C4_6AA14722FD17","this.Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467","this.Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B"],"horizontalAlign":"center"},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"pressedFontColor":"#FFFFFF","pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467","rollOverBackgroundOpacity":0.7,"paddingBottom":0,"fontSize":"22px","backgroundColor":["#FFFFFF"],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_96287061_87AE_5352_41D8_744CBA9169B9, 98.5798816568048, -8.880187940485513, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":181.04,"data":{"name":"KML Overlay"},"height":40,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","class":"Button","paddingRight":0,"horizontalAlign":"center"},{"vfov":180,"frames":[{"cube":{"levels":[{"height":4096,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/0/{row}_{column}.webp","tags":"ondemand","colCount":24,"rowCount":4,"class":"TiledImageResourceLevel","width":24576},{"height":2048,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/1/{row}_{column}.webp","tags":"ondemand","colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"height":1024,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_t.webp"}],"hfov":360,"id":"panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8","data":{"label":"Original Pnao"},"hfovMax":130,"class":"Panorama","thumbnailUrl":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_t.webp","label":trans('panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8.label')},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"pressedFontColor":"#FFFFFF","pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B","rollOverBackgroundOpacity":0.7,"paddingBottom":0,"fontSize":"22px","backgroundColor":["#FFFFFF"],"iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":176.04,"data":{"name":"Revit Model"},"height":40.02,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","class":"Button","paddingRight":0,"horizontalAlign":"center"},{"aaEnabled":true,"touchControlMode":"drag_rotation","displayPlaybackBar":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate"},{"playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderSize":0,"progressBackgroundColor":["#000000"],"progressBarBackgroundColor":["#3399FF"],"playbackBarRight":0,"toolTipFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","subtitlesBackgroundColor":"#000000","progressLeft":"33%","subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"subtitlesBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarBorderRadius":0,"playbackBarLeft":0,"progressRight":"33%","subtitlesTop":0,"playbackBarHeadHeight":15,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"progressBarBackgroundColorRatios":[0],"progressBottom":10,"progressHeight":2,"minHeight":50,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipPaddingRight":6,"toolTipFontColor":"#606060","subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"progressBorderSize":0,"progressBarBorderRadius":2,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"propagateClick":false,"width":"100%","progressBarBorderSize":0,"subtitlesBottom":50,"toolTipPaddingBottom":4,"height":"100%","playbackBarHeight":10,"subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesTextShadowHorizontalLength":1,"class":"ViewerArea"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_89736167_879E_355D_41D9_967E4C22EF55"},{"class":"PanoramaPlayListItem","media":"this.panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_96285061_87AE_5352_41CA_348E672F138E","camera":"this.panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_96287061_87AE_5352_41D8_744CBA9169B9","camera":"this.panorama_889F6BD6_879E_D57E_41AC_2AF657A74B29_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_8D91DAC7_8762_575D_41DF_71EBAA9144B0"}],"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.36, Thu Oct 29 2026
//