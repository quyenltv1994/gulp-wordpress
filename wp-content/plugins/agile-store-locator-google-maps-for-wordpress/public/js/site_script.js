asl_jQuery(document).ready(function() {
    var click = 0;
    function InfoBox(a) {
        a = a || {}, google.maps.OverlayView.apply(this, arguments), this.content_ = a.content || "", this.disableAutoPan_ = a.disableAutoPan || !1, this.maxWidth_ = a.maxWidth || 0, this.pixelOffset_ = a.pixelOffset || new google.maps.Size(0, 0), this.position_ = a.position || new google.maps.LatLng(0, 0), this.zIndex_ = a.zIndex || null, this.boxClass_ = a.boxClass || "infoBox", this.boxStyle_ = a.boxStyle || {}, this.closeBoxMargin_ = a.closeBoxMargin || "2px", this.closeBoxURL_ = a.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", "" === a.closeBoxURL && (this.closeBoxURL_ = ""), this.infoBoxClearance_ = a.infoBoxClearance || new google.maps.Size(1, 1), "undefined" == typeof a.visible && ("undefined" == typeof a.isHidden ? a.visible = !0 : a.visible = !a.isHidden), this.isHidden_ = !a.visible, this.alignBottom_ = a.alignBottom || !1, this.pane_ = a.pane || "floatPane", this.enableEventPropagation_ = a.enableEventPropagation || !1, this.div_ = null, this.closeListener_ = null, this.moveListener_ = null, this.contextListener_ = null, this.eventListeners_ = null, this.fixedWidthSet_ = null
    }
    var asl_locator = function() {};
    if (window.asl_locator = asl_locator, "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
        "use strict";
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(jQuery), + function(a) {
        "use strict";

        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+jQuery)/, "");
            return a(d)
        }

        function c(b) {
            return this.each(function() {
                var c = a(this),
                    e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
            })
        }
        var d = function(b, c) {
            this.jQueryelement = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.jQuerytrigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.jQueryparent = this.getParent() : this.addAriaAndCollapsedClass(this.jQueryelement, this.jQuerytrigger), this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
            toggle: !0
        }, d.prototype.dimension = function() {
            var a = this.jQueryelement.hasClass("width");
            return a ? "width" : "height"
        }, d.prototype.show = function() {
            if (!this.transitioning && !this.jQueryelement.hasClass("in")) {
                var b, e = this.jQueryparent && this.jQueryparent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                    var f = a.Event("show.bs.collapse");
                    if (this.jQueryelement.trigger(f), !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.jQueryelement.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.jQuerytrigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var h = function() {
                            this.jQueryelement.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.jQueryelement.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return h.call(this);
                        var i = a.camelCase(["scroll", g].join("-"));
                        this.jQueryelement.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.jQueryelement[0][i])
                    }
                }
            }
        }, d.prototype.hide = function() {
            if (!this.transitioning && this.jQueryelement.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.jQueryelement.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.jQueryelement[c](this.jQueryelement[c]())[0].offsetHeight, this.jQueryelement.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.jQuerytrigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var e = function() {
                        this.transitioning = 0, this.jQueryelement.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return a.support.transition ? void this.jQueryelement[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                }
            }
        }, d.prototype.toggle = function() {
            this[this.jQueryelement.hasClass("in") ? "hide" : "show"]()
        }, d.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e)
            }, this)).end()
        }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
        };
        var e = a.fn.collapse;
        a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = e, this
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e),
                g = f.data("bs.collapse"),
                h = g ? "toggle" : e.data();
            c.call(f, h)
        })
    }(jQuery), + function(a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function() {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(b) {
                    return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), InfoBox.prototype = new google.maps.OverlayView, InfoBox.prototype.createInfoBoxDiv_ = function() {
        var a, b, c, d = this,
            e = function(a) {
                a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()
            },
            f = function(a) {
                a.returnValue = !1, a.preventDefault && a.preventDefault(), d.enableEventPropagation_ || e(a)
            };
        if (!this.div_) {
            if (this.div_ = document.createElement("div"), this.setBoxStyle_(), "undefined" == typeof this.content_.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + this.content_ : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(this.content_)), this.getPanes()[this.pane_].appendChild(this.div_), this.addClickHandler_(), this.div_.style.width ? this.fixedWidthSet_ = !0 : 0 !== this.maxWidth_ && this.div_.offsetWidth > this.maxWidth_ ? (this.div_.style.width = this.maxWidth_, this.div_.style.overflow = "auto", this.fixedWidthSet_ = !0) : (c = this.getBoxWidths_(), this.div_.style.width = this.div_.offsetWidth - c.left - c.right + "px", this.fixedWidthSet_ = !1), this.panBox_(this.disableAutoPan_), !this.enableEventPropagation_) {
                for (this.eventListeners_ = [], b = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"], a = 0; a < b.length; a++) this.eventListeners_.push(google.maps.event.addDomListener(this.div_, b[a], e));
                this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function(a) {
                    this.style.cursor = "default"
                }))
            }
            this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", f), google.maps.event.trigger(this, "domready")
        }
    }, InfoBox.prototype.getCloseBoxImg_ = function() {
        var a = "";
        return "" !== this.closeBoxURL_ && (a = "<img", a += " src='" + this.closeBoxURL_ + "'", a += " align=right", a += " style='", a += " position: relative;", a += " cursor: pointer;", a += " margin: " + this.closeBoxMargin_ + ";", a += "'>"), a
    }, InfoBox.prototype.addClickHandler_ = function() {
        var a;
        "" !== this.closeBoxURL_ ? (a = this.div_.firstChild, this.closeListener_ = google.maps.event.addDomListener(a, "click", this.getCloseClickHandler_())) : this.closeListener_ = null
    }, InfoBox.prototype.getCloseClickHandler_ = function() {
        var a = this;
        return function(b) {
            b.cancelBubble = !0, b.stopPropagation && b.stopPropagation(), google.maps.event.trigger(a, "closeclick"), a.close()
        }
    }, InfoBox.prototype.panBox_ = function(a) {
        var b, c, d = 0,
            e = 0;
        if (!a && (b = this.getMap(), b instanceof google.maps.Map)) {
            b.getBounds().contains(this.position_) || b.setCenter(this.position_), c = b.getBounds();
            var f = b.getDiv(),
                g = f.offsetWidth,
                h = f.offsetHeight,
                i = this.pixelOffset_.width,
                j = this.pixelOffset_.height,
                k = this.div_.offsetWidth,
                l = this.div_.offsetHeight,
                m = this.infoBoxClearance_.width,
                n = this.infoBoxClearance_.height,
                o = this.getProjection().fromLatLngToContainerPixel(this.position_);
            o.x < -i + m ? d = o.x + i - m : o.x + k + i + m > g && (d = o.x + k + i + m - g), this.alignBottom_ ? o.y < -j + n + l ? e = o.y + j - n - l : o.y + j + n > h && (e = o.y + j + n - h) : o.y < -j + n ? e = o.y + j - n : o.y + l + j + n > h && (e = o.y + l + j + n - h), (0 !== d || 0 !== e) && (b.getCenter(), b.panBy(d, e))
        }
    }, InfoBox.prototype.setBoxStyle_ = function() {
        var a, b;
        if (this.div_) {
            this.div_.className = this.boxClass_, this.div_.style.cssText = "", b = this.boxStyle_;
            for (a in b) b.hasOwnProperty(a) && (this.div_.style[a] = b[a]);
            this.div_.style.WebkitTransform = "translateZ(0)", "undefined" != typeof this.div_.style.opacity && "" !== this.div_.style.opacity && (this.div_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 100 * this.div_.style.opacity + ')"', this.div_.style.filter = "alpha(opacity=" + 100 * this.div_.style.opacity + ")"), this.div_.style.position = "absolute", this.div_.style.visibility = "hidden", null !== this.zIndex_ && (this.div_.style.zIndex = this.zIndex_)
        }
    }, InfoBox.prototype.getBoxWidths_ = function() {
        var a, b = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            c = this.div_;
        return document.defaultView && document.defaultView.getComputedStyle ? (a = c.ownerDocument.defaultView.getComputedStyle(c, ""), a && (b.top = parseInt(a.borderTopWidth, 10) || 0, b.bottom = parseInt(a.borderBottomWidth, 10) || 0, b.left = parseInt(a.borderLeftWidth, 10) || 0, b.right = parseInt(a.borderRightWidth, 10) || 0)) : document.documentElement.currentStyle && c.currentStyle && (b.top = parseInt(c.currentStyle.borderTopWidth, 10) || 0, b.bottom = parseInt(c.currentStyle.borderBottomWidth, 10) || 0, b.left = parseInt(c.currentStyle.borderLeftWidth, 10) || 0, b.right = parseInt(c.currentStyle.borderRightWidth, 10) || 0), b
    }, InfoBox.prototype.onRemove = function() {
        this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
    }, InfoBox.prototype.draw = function() {
        this.createInfoBoxDiv_();
        var a = this.getProjection().fromLatLngToDivPixel(this.position_);
        this.div_.style.left = a.x + this.pixelOffset_.width + "px", this.alignBottom_ ? this.div_.style.bottom = -(a.y + this.pixelOffset_.height) + "px" : this.div_.style.top = a.y + this.pixelOffset_.height + "px", this.isHidden_ ? this.div_.style.visibility = "hidden" : this.div_.style.visibility = "visible"
    }, InfoBox.prototype.setOptions = function(a) {
        "undefined" != typeof a.boxClass && (this.boxClass_ = a.boxClass, this.setBoxStyle_()), "undefined" != typeof a.boxStyle && (this.boxStyle_ = a.boxStyle, this.setBoxStyle_()), "undefined" != typeof a.content && this.setContent(a.content), "undefined" != typeof a.disableAutoPan && (this.disableAutoPan_ = a.disableAutoPan), "undefined" != typeof a.maxWidth && (this.maxWidth_ = a.maxWidth), "undefined" != typeof a.pixelOffset && (this.pixelOffset_ = a.pixelOffset), "undefined" != typeof a.alignBottom && (this.alignBottom_ = a.alignBottom), "undefined" != typeof a.position && this.setPosition(a.position), "undefined" != typeof a.zIndex && this.setZIndex(a.zIndex), "undefined" != typeof a.closeBoxMargin && (this.closeBoxMargin_ = a.closeBoxMargin), "undefined" != typeof a.closeBoxURL && (this.closeBoxURL_ = a.closeBoxURL), "undefined" != typeof a.infoBoxClearance && (this.infoBoxClearance_ = a.infoBoxClearance), "undefined" != typeof a.isHidden && (this.isHidden_ = a.isHidden), "undefined" != typeof a.visible && (this.isHidden_ = !a.visible), "undefined" != typeof a.enableEventPropagation && (this.enableEventPropagation_ = a.enableEventPropagation), this.div_ && this.draw()
    }, InfoBox.prototype.setContent = function(a) {
        this.content_ = a, this.div_ && (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.fixedWidthSet_ || (this.div_.style.width = ""), "undefined" == typeof a.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + a : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(a)), this.fixedWidthSet_ || (this.div_.style.width = this.div_.offsetWidth + "px", "undefined" == typeof a.nodeType ? this.div_.innerHTML = this.getCloseBoxImg_() + a : (this.div_.innerHTML = this.getCloseBoxImg_(), this.div_.appendChild(a))), this.addClickHandler_()), google.maps.event.trigger(this, "content_changed")
    }, InfoBox.prototype.setPosition = function(a) {
        this.position_ = a, this.div_ && this.draw(), google.maps.event.trigger(this, "position_changed")
    }, InfoBox.prototype.setZIndex = function(a) {
        this.zIndex_ = a, this.div_ && (this.div_.style.zIndex = a), google.maps.event.trigger(this, "zindex_changed")
    }, InfoBox.prototype.setVisible = function(a) {
        this.isHidden_ = !a, this.div_ && (this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible")
    }, InfoBox.prototype.getContent = function() {
        return this.content_
    }, InfoBox.prototype.getPosition = function() {
        return this.position_
    }, InfoBox.prototype.getZIndex = function() {
        return this.zIndex_
    }, InfoBox.prototype.getVisible = function() {
        var a;
        return a = "undefined" != typeof this.getMap() && null !== this.getMap() && !this.isHidden_
    }, InfoBox.prototype.show = function() {
        this.isHidden_ = !1, this.div_ && (this.div_.style.visibility = "visible")
    }, InfoBox.prototype.hide = function() {
        this.isHidden_ = !0, this.div_ && (this.div_.style.visibility = "hidden")
    }, InfoBox.prototype.open = function(a, b) {
        var c = this;
        b && (this.position_ = b.getPosition(), this.moveListener_ = google.maps.event.addListener(b, "position_changed", function() {
            c.setPosition(this.getPosition())
        })), this.setMap(a), this.div_ && this.panBox_()
    }, InfoBox.prototype.close = function() {
        var a;
        if (this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.eventListeners_) {
            for (a = 0; a < this.eventListeners_.length; a++) google.maps.event.removeListener(this.eventListeners_[a]);
            this.eventListeners_ = null
        }
        this.moveListener_ && (google.maps.event.removeListener(this.moveListener_), this.moveListener_ = null), this.contextListener_ && (google.maps.event.removeListener(this.contextListener_), this.contextListener_ = null), this.setMap(null)
    };
    var asl_drawing = {
        shapes: [],
        shapes_index: 0,
        current_map: null,
        loadData: function(a, b) {
            var c = this;
            c.current_map = b;
            for (var d in a.shapes) a.shapes[d] && ("polygon" == a.shapes[d].type ? c.shapes.push(c.create_polygon.call(c, a.shapes[d].coord, b, a.shapes[d])) : "circle" == a.shapes[d].type ? c.shapes.push(c.create_circle.call(c, a.shapes[d], b)) : "rectangle" == a.shapes[d].type && c.shapes.push(c.create_rectangle.call(c, a.shapes[d], b)))
        },
        create_rectangle: function(a) {
            var b = this.current_map;
            return new google.maps.Rectangle({
                strokeColor: a.strokeColor,
                fillColor: a.color,
                strokeWeight: 1,
                type: "rectangle",
                editable: !!asl_drawing.allow_edit && asl_drawing.allow_edit,
                map: b,
                bounds: new google.maps.LatLngBounds(new google.maps.LatLng(a.sw[0], a.sw[1]), new google.maps.LatLng(a.ne[0], a.ne[1]))
            })
        },
        create_circle: function(a, b) {
            var b = this.current_map;
            return new google.maps.Circle({
                strokeColor: a.strokeColor,
                fillColor: a.color,
                type: "circle",
                strokeWeight: 1,
                map: b,
                editable: !!asl_drawing.allow_edit && asl_drawing.allow_edit,
                center: new google.maps.LatLng(a.center[0], a.center[1]),
                radius: a.radius
            })
        },
        create_polygon: function(a, b, c) {
            var b = this.current_map,
                d = [];
            for (var e in a) d.push({
                lat: a[e][0],
                lng: a[e][1]
            });
            return new google.maps.Polygon({
                paths: d,
                fillColor: c.color,
                strokeColor: c.strokeColor,
                strokeWeight: 1,
                editable: !!asl_drawing.allow_edit,
                type: "polygon",
                map: b
            })
        }
    };
    ! function(a) {
        if (window.google && google.maps) {
            var b = {
                pan_mode: !1
            };
            asl_locator.add_location_search = function (b, c) {
                var d = a(c),
                    e = new Bloodhound({
                        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        local: b
                    }),
                    f = function (b, c, d) {
                        var e = a('.asl-p-cont .item[data-id="' + c.id + '"]');
                        e[0] && (e.trigger("click").addClass("highlighted"), "1" == asl_configuration.layout ? e.parents("li").children(0).trigger("click") : a("#asl-storelocator #panel").animate({
                            scrollTop: e.position().top
                        }, "fast"))
                    };
                d.val(""), e.initialize(), d.typeahead({
                    hint: !1,
                    highlight: !0,
                    minLength: 1
                }, {
                    name: "title",
                    displayKey: "title",
                    source: e.ttAdapter()
                }), d.on("typeahead:selected", f)
            }, asl_locator.save_analytics = function (b, c) {
                var d = {
                    action: "asl_search_log",
                    nonce: ASL_REMOTE.nonce,
                    map_id: asl_configuration.map_id
                };
                c ? (d.is_search = 0, d.store_id = b.id_) : (d.is_search = 1, d.place_id = b.id, d.search_str = b.formatted_address), a.ajax({
                    url: ASL_REMOTE.ajax_url,
                    data: d,
                    type: "POST",
                    success: function (a) {
                    }
                })
            }, asl_locator.toRad_ = function (a) {
                return a * Math.PI / 180
            }, asl_locator.Store = function (a, b, c, d) {
                this.id_ = a, this.location_ = b, this.categories_ = c, this.props_ = d || {}, this.v_id = d.vendor_id
            }, asl_locator.Store.prototype.setMarker = function (a) {
                this.marker_ = a, google.maps.event.trigger(this, "marker_changed", a)
            }, asl_locator.Store.prototype.getMarker = function () {
                return this.marker_
            }, asl_locator.Store.prototype.getId = function () {
                return this.id_
            }, asl_locator.Store.prototype.getLocation = function () {
                return this.location_
            }, asl_locator.Store.prototype.hasCategory = function (a) {
                return this.categories_.indexOf(a) != -1
            }, asl_locator.Store.prototype.hasAnyCategory = function (a) {
                if (!a.array_.length) return !0;
                for (var b = a.asList(), c = 0, d = b.length; c < d; c++)
                    if (this.hasCategory(b[c].id_)) return !0;
                return !1
            }, asl_locator.Store.prototype.getDetails = function () {
                return this.props_
            }, asl_locator.Store.prototype.generateFieldsHTML_ = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    this.props_[e] && (b.push('<div class="'), b.push(e), b.push('">'), b.push(e + ": "), b.push(isNaN(this.props_[e]) ? this.props_[e] : numberWithCommas(this.props_[e])), b.push("</div>"))
                }
                return b.join("")
            }, asl_locator.Store.prototype.generateFeaturesHTML_ = function () {
                var a = [];
                a.push('<ul class="features">');
                for (var b, c = this.categories_.asList(), d = 0; b = c[d]; d++) a.push("<li>"), a.push(b.getDisplayName()), a.push("</li>");
                return a.push("</ul>"), a.join("")
            }, asl_locator.Store.prototype.getStoreContent = function () {
                if (!this.content_) {
                    var b = window.asl_tmpl_list_item ? window.asl_tmpl_list_item : a.templates("#tmpl_list_item");
                    window.asl_tmpl_list_item = b, this.content_ = a(b.render(this.props_))
                }
                return this.content_
            }, asl_locator.Store.prototype.getcontent_ = function (b) {
                var c = window.asl_too_tip_tmpl ? window.asl_too_tip_tmpl : a.templates("#asl_too_tip");
                window.asl_too_tip_tmpl = c, b.props_.show_categories = asl_configuration.show_categories, b.props_.URL = asl_configuration.URL;
                var d = c.render(b.props_);
                return d
            }, asl_locator.Store.prototype.getInfoWindowContent = function (a) {
                var b = '<div class="infoWindow '+this.props_.service+'" id="style_' + (asl_configuration.infobox_layout ? asl_configuration.infobox_layout : "1") + '">';
                return b += this.getcontent_(this), b += "</div>", this.content_ = b, this.content_
            }, asl_locator.Store.infoPanelCache_ = {}, asl_locator.Store.prototype.getInfoPanelItem = function () {
                var a = this,
                    b = asl_locator.Store.infoPanelCache_,
                    c = a.id_;
                if (!b[c]) {
                    var d = a.getStoreContent();
                    b[c] = d[0]
                }
                return b[c]
            }, asl_locator.Store.prototype.distanceTo = function (a) {
                var b = 6371,
                    c = this.getLocation(),
                    d = asl_locator.toRad_(c.lat()),
                    e = asl_locator.toRad_(c.lng()),
                    f = asl_locator.toRad_(a.lat()),
                    g = asl_locator.toRad_(a.lng()),
                    h = f - d,
                    i = g - e,
                    j = Math.sin(h / 2) * Math.sin(h / 2) + Math.cos(d) * Math.cos(f) * Math.sin(i / 2) * Math.sin(i / 2),
                    k = 2 * Math.atan2(Math.sqrt(j), Math.sqrt(1 - j)),
                    l = b * k;
                return "MILES" == asl_configuration.distance_unit ? .621371 * l : l
            }, asl_locator.View = function (b, c, d) {
                this.map_ = b, this.data_ = c, this.settings_ = a.extend({
                    updateOnPan: !0,
                    geolocation: !1,
                    features: new asl_locator.FeatureSet
                }, d), this.init_(), google.maps.event.trigger(this, "load"), this.set("featureFilter", new asl_locator.FeatureSet)
            }, asl_locator.View = asl_locator.View, asl_locator.View.prototype = new google.maps.MVCObject, asl_locator.View.prototype.measure_distance = function (b) {
                var c = this,
                    d = new google.maps.LatLng(b.lat(), b.lng());
                c._panel.dest_coords = c.dest_coords = d;
                var e = asl_configuration.radius_range;
                for (var f in c.data_.stores_)
                    if (c.data_.stores_.hasOwnProperty(f)) {
                        var g = c.data_.stores_[f].distanceTo(c.dest_coords);
                        c.data_.stores_[f].content_ = null, c.data_.stores_[f].props_.distance = g, c.data_.stores_[f].props_.dist_str = g.toFixed(2) + " " + asl_configuration.distance_unit, g > e && (e = g)
                    }
                if (asl_configuration.radius_range = Math.round(e), a(".asl-p-cont #asl-radius-input").html(asl_configuration.radius_range), delete asl_locator.Store.infoPanelCache_, asl_locator.Store.infoPanelCache_ = {}, c.my_marker) c.my_marker.setPosition(d);
                else {
                    c.my_marker = new google.maps.Marker({
                        title: "Your Current Location",
                        position: d,
                        animation: google.maps.Animation.DROP,
                        draggable: !0,
                        map: c.getMap()
                    });
                    var h = new google.maps.MarkerImage(asl_configuration.URL + "public/img/me-pin.png", null, null, null);
                    c.my_marker.setIcon(h), c.my_marker.addListener("dragend", function (a) {
                        c.measure_distance(a.latLng)
                    })
                }
                c.getMap().setCenter(d), c.getMap().setZoom(parseInt(asl_configuration.zoom_li)), google.maps.event.trigger(c, "load"), asl_configuration.distance_slider & asl_configuration.advance_filter && (a(".asl-p-cont .range_filter").removeClass("hide"), asl_configuration.advance_filter && !c.jQueryslider ? c.jQueryslider = asl_jQuery(".asl-p-cont #asl-radius-slide").bslider({
                    value: asl_configuration.radius_range,
                    min: 1,
                    max: asl_configuration.radius_range
                }).on("slide", function (b) {
                    a("#asl-radius-input").html(b.value), asl_configuration.radius_range = b.value
                }).on("slideStop", function (a) {
                    c.refreshView(!0), c._panel.stores_changed()
                }) : (c.jQueryslider.data("slider").max = asl_configuration.radius_range, c.jQueryslider.bslider("setValue", asl_configuration.radius_range), a("#asl-radius-input").html(asl_configuration.radius_range))), c.refreshView(!0)
            }, asl_locator.View.prototype.geolocate_ = function () {
                var a = this;
                window.navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function (b) {
                    a.measure_distance(new google.maps.LatLng(b.coords.latitude, b.coords.longitude))
                }, void 0, {
                    maximumAge: 6e4,
                    timeout: 1e4
                })
            }, asl_locator.View.prototype.init_ = function () {
                this.settings_.geolocation && this.geolocate_(), this.markerCache_ = {}, this.infoWindow_ = new InfoBox({
                    disableAutoPan: !1,
                    boxStyle: {
                        width: "275px",
                        margin: "0 0 33px -130px"
                    },
                    alignBottom: !0,
                    closeBoxMargin: "1" == asl_configuration.infobox_layout || "0" != asl_configuration.template ? "12px 5px -22px 0" : "12px -7px -22px 0",
                    closeBoxURL: "1" == asl_configuration.infobox_layout || "0" != asl_configuration.template ? asl_configuration.URL + "public/img/close__.png" : asl_configuration.URL + "public/img/close_" + asl_configuration.color_scheme + ".png",
                    infoBoxClearance: new google.maps.Size(1, 1)
                });
                var a = this,
                    b = this.getMap();
                this.set("updateOnPan", this.settings_.updateOnPan), google.maps.event.addListener(this.infoWindow_, "closeclick", function () {
                    a.highlight(null)
                }), google.maps.event.addListener(b, "click", function () {
                    a.highlight(null), a.infoWindow_.close()
                    jQuery(".asl-map").removeClass('active');
                    jQuery(".asl-panel").removeClass('active');
                })
            }, asl_locator.View.prototype.updateOnPan_changed = function () {
                this.updateOnPanListener_ && google.maps.event.removeListener(this.updateOnPanListener_);
                var a = this;
                if (this.get("updateOnPan") && this.getMap()) {
                    var a = this,
                        b = this.getMap();
                    this.updateOnPanListener_ = google.maps.event.addListener(b, "idle", function () {
                        a.showing_direction || "1" != asl_configuration.load_all || a.refreshView()
                    })
                }
            }, asl_locator.View.prototype.addStoreToMap = function (a) {
                var b = this.getMarker(a);
                a.setMarker(b);
                var c = this;
                console.log(b); 
                b.clickListener_ = google.maps.event.addListener(b, "click", function () {
                    //click icon map.. it's like hightlighted
                    c.marker_clicked = !0, c.marker_center = b.getPosition(), c.highlight(b, !1)
                    target = jQuery(".item"+a.props_.id).parents(".mCustomScrollbar");
                    target.mCustomScrollbar("scrollTo",".item"+t.props_.id);
                })
            }, asl_locator.View.prototype.createMarker = function (a){
                //create marker in map(set icon for each item)
                var b = asl_configuration.URL + "public/icon/"; 
                var icon = String(a.props_.icon);
                if(a.props_.icon){
                    if ( icon.includes("tangfreres.png") ) {
                        return b += icon, new google.maps.Marker({
                            map: this.getMap(),
                            position: a.getLocation(),
                            icon: new google.maps.MarkerImage(b, null, null, null, null),
                            clickable: true,
                            zIndex:98
                        });
                    }

                    return b += icon, new google.maps.Marker({
                        map: this.getMap(),
                        position: a.getLocation(),
                        icon: new google.maps.MarkerImage(b, null, null, null, null),
                        clickable: true,
                        zIndex:97
                    });
                }else{
                    return b += "tang-courment-icon-active.png", new google.maps.Marker({
                        map: this.getMap(),
                        position: a.getLocation(),
                        icon: new google.maps.MarkerImage(b, null, null, null, null),
                        clickable: true,
                        zIndex:97
                    });
                }


                /*if (service.includes("service3")) {
                    return b += "tang-courment-icon-active.png", new google.maps.Marker({
                        position: a.getLocation(),
                        icon: new google.maps.MarkerImage(b, null, null, null, new google.maps.Size(28, 30)),
                        zIndex:97
                    });
                } else {
                    return b += "default-click", new google.maps.Marker({
                        position: a.getLocation(),
                        icon: new google.maps.MarkerImage(b, null, null, null, new google.maps.Size(28, 30)),
                        zIndex:97
                    });
                }*/
                /*return b += "default.png", new google.maps.Marker({
                 position: a.getLocation(),
                 icon: new google.maps.MarkerImage(b, null, null, null, null)
                 });*/
                /*var b = (new google.maps.Size(35, 35), asl_configuration.URL + "public/icon/");
                 return asl_configuration.category_marker && a.categories_.length >= 1 ? (b = asl_configuration.URL + "public/svg/", b += asl_categories[a.categories_[0]] ? asl_categories[a.categories_[0]].icon || "default.png" : "default.png") : b += asl_markers[a.props_.marker_id] ? asl_markers[a.props_.marker_id].icon || "default.png" : "default.png", new google.maps.Marker({
                 position: a.getLocation(),
                 icon: new google.maps.MarkerImage(b, null, null, null, null)
                 })*/
            }, asl_locator.View.prototype.getMarker = function(a) {
                var b = this.markerCache_,
                    c = a.id_;
                return b[c] || (b[c] = this.createMarker(a)), b[c]
            }, asl_locator.View.prototype.getInfoWindow = function(b, c) {
                if (!b) return this.infoWindow_;
                console.log(b);
                var d = a(b.getInfoWindowContent(c));
                return this.infoWindow_.setContent(d[0]), this.infoWindow_
            }, asl_locator.View.prototype.getViewFeatures = function() {
                return this.settings_.features
            }, asl_locator.View.prototype.getFeatureById = function(a) {
                if (!this.featureById_) {
                    this.featureById_ = {};
                    for (var b, c = 0; b = this.settings_.features[c]; c++) this.featureById_[b.id_] = b
                }
                return this.featureById_[a]
            }, asl_locator.View.prototype.featureFilter_changed = function() {
                google.maps.event.trigger(this, "featureFilter_changed", this.get("featureFilter")), this.get("stores") && this.clearMarkers()
            }, asl_locator.View.prototype.clearMarkers = function() {
                for (var a in this.markerCache_) {
                    this.markerCache_[a].setMap(null);
                    var b = this.markerCache_[a].clickListener_;
                    b && google.maps.event.removeListener(b)
                }
            }, asl_locator.View.prototype.refreshView = function(b) {
                var c = this;
                /*console.log("CALLING REFRESH VIEW"),*/ this.data_.getStores(this.getMap().getBounds(), this.get("featureFilter"), function(b) {
                    var d = c.get("stores");
                    if (d)
                        for (var e = 0, f = d.length; e < f; e++) google.maps.event.removeListener(d[e].getMarker().clickListener_);
                    var g = [],
                        h = !!(asl_configuration.distance_slider && b && b[0] && b[0].props_.dist_str),
                        i = Object.keys(asl_categories);
                    for (var j in i) asl_categories[i[j]] && (asl_categories[i[j]].len = 0);
                    for (var k in b)
                        if (b.hasOwnProperty(k)) {
                            if (asl_configuration.advance_filter) {
                                if (h && b[k].props_.distance >= asl_configuration.radius_range) continue;
                                if (asl_configuration.time_switch && asl_configuration.show_opened != b[k].props_.open) continue
                            }
                            for (var j in b[k].categories_) b[k].categories_.hasOwnProperty(j) && asl_categories[b[k].categories_[j]] && asl_categories[b[k].categories_[j]].len++;
                            g.push(b[k])
                        }
                    if ("2" == asl_configuration.template && asl_configuration.advance_filter) {
                        var l = a(".asl-p-cont .categories-panel .round-box");
                        l.each(function(b) {
                            this.children[0].children[1].children[0].children[1].innerHTML = "(" + asl_categories[a(this).attr("data-id")].len + ")"
                        })
                    }
                    c.set("stores", g)
                }, b)
            }, asl_locator.View.prototype.stores_changed = function() {
                for (var a, b = this.get("stores"), c = [], d = 0; a = b[d]; d++) this.addStoreToMap(a), c.push(a.marker_);
                "1" == asl_configuration.cluster && (asl_locator.marker_clusters.clearMarkers(), asl_locator.marker_clusters.addMarkers(c)), "1" != asl_configuration.load_all && this._panel.stores_changed()
            }, asl_locator.View.prototype.getMap = function() {
                return this.map_
            }, asl_locator.View.prototype.highlight = function(a, b) {
                var c = null;
                if (a) {
                    var d = this.get("stores");
                    if (c = this.getInfoWindow(a, d), a.getMarker()) {
                        var e = this;
                        a.getMarker();
                        var stores = this.data_.stores_;
                        for (var key in stores) {
                        	if(stores[key].marker_ != null){
                        		var jQueryicon = stores[key].marker_.icon;
	                            if ( jQueryicon.url.includes("tangfreres.png") ) {
	                                stores[key].marker_.zIndex = 98;
	                            } else {
	                                stores[key].marker_.zIndex = 97;
	                            }	
                        	}
                            
                            /*if(stores[key].marker_.icon.url == asl_configuration.URL + "public/icon/tang-courment-icon-active.png"){
                                /!*stores[key].marker_.icon.url = asl_configuration.URL + "public/icon/tang-courment-icon.png";*!/
                                stores[key].marker_.zIndex = 97;
                            }
                            if(stores[key].marker_.icon.url == asl_configuration.URL + "public/icon/default-click.png"){
                                /!*stores[key].marker_.icon.url = asl_configuration.URL + "public/icon/default.png";*!/
                                stores[key].marker_.zIndex = 97;
                            }*/
                            this.refreshView(stores[key]);
                        }
                        jQuery(".map__main>.title_map").hide();
                        jQuery("#asl-storelocator .asl-panel").addClass('active');
                        jQuery("#asl-storelocator .asl-map").addClass('active');
                        if(!jQuery(".gm-style").hasClass('click')){
                            jQuery(".gm-style").addClass("active");
                            jQuery(".gm-style").addClass("click");
                            click =1;
                        }else
                            jQuery(".gm-style").removeClass("active");
                        if(!jQuery(".item"+a.id_).hasClass('highlighted')) {
                            jQuery(".panel-inner .item").removeClass("highlighted");
                            jQuery(".item" + a.id_).addClass('highlighted');
                        }
                        var service = String(a.props_.service);
                        a.marker_.zIndex = 99;
                        a.getMarker(), c.open(e.getMap(), a.getMarker()), asl_configuration.analytics && asl_locator.save_analytics(a, 1)
                    } else c.setPosition(a.getLocation()), c.open(this.getMap());
                    this.getMap().setZoom(parseInt(asl_configuration.zoom_li)), "0" == asl_configuration.load_all && this.getMap().panTo(a.getLocation()), this.getMap().getStreetView().getVisible() && this.getMap().getStreetView().setPosition(a.getLocation())
                } else this.getInfoWindow().close();
                this.set("selectedStore", a)
            }, asl_locator.View.prototype.selectedStore_changed = function() {
                google.maps.event.trigger(this, "selectedStore_changed", this.get("selectedStore"))
            }, asl_locator.ViewOptions = function() {}, asl_locator.ViewOptions.prototype.updateOnPan, asl_locator.ViewOptions.prototype.geolocation, asl_locator.ViewOptions.prototype.features, asl_locator.ViewOptions.prototype.markerIcon, asl_locator.Feature = function(a, b, c) {
                this.id_ = a, this.name_ = b, this.img_ = c
            }, asl_locator.Feature = asl_locator.Feature, asl_locator.Feature.prototype.getId = function() {
                return this.id_
            }, asl_locator.Feature.prototype.getDisplayName = function() {
                return this.name_
            }, asl_locator.Feature.prototype.toString = function() {
                return this.getDisplayName()
            }, asl_locator.FeatureSet = function(a) {
                this.array_ = [], this.hash_ = {};
                for (var b, c = 0; b = arguments[c]; c++) this.add(b)
            }, asl_locator.FeatureSet = asl_locator.FeatureSet, asl_locator.FeatureSet.prototype.toggle = function(a) {
                this.hash_[a.id_] ? this.remove(a) : this.add(a)
            }, asl_locator.FeatureSet.prototype.add = function(a) {
                a && (this.array_.push(a), this.hash_[a.id_] = 1)
            }, asl_locator.FeatureSet.prototype.remove = function(a) {
                var b = a.id_;
                this.hash_[b] && (delete this.hash_[b], this.array_ = this.array_.filter(function(a) {
                    return a && a.id_ != b
                }))
            }, asl_locator.FeatureSet.prototype.asList = function() {
                for (var a = [], b = 0, c = this.array_.length; b < c; b++) {
                    var d = this.array_[b];
                    null !== d && a.push(d)
                }
                return a
            }, asl_locator.FeatureSet.NONE = new asl_locator.FeatureSet, asl_locator.Panel = function(b, c) {
                this.el_ = a(b), this.el_.addClass("asl_locator-panel"), this.settings_ = a.extend({
                    locationSearch: !0,
                    locationSearchLabel: "Enter Location/ZipCode: ",
                    featureFilter: !0,
                    directions: !0,
                    view: null
                }, c), this.directionsRenderer_ = new google.maps.DirectionsRenderer({
                    draggable: !0
                }), this.directionsService_ = new google.maps.DirectionsService, this.init_()
            }, asl_locator.Panel = asl_locator.Panel, asl_locator.Panel.prototype = new google.maps.MVCObject, asl_locator.Panel.prototype.init_ = function() {
                var b = this;
                this.itemCache_ = {}, this.settings_.view && this.set("view", this.settings_.view), this.filter_ = a(".asl-p-cont .header-search");
                var c = b.get("view").getMap();
                if (window.asl_map = c, "1" == asl_configuration.cluster && (asl_locator.marker_clusters = new MarkerClusterer(c, [], {
                        maxZoom: 7,
                        gridSize: 40,
                        imagePath: asl_configuration.URL + "public/icon/m"
                    })), this.settings_.locationSearch && (this.locationSearch_ = this.filter_, "undefined" != typeof google.maps.places ? "1" != asl_configuration.search_type && this.initAutocomplete_() : this.filter_.submit(function() {
                        b.searchPosition(a("input", b.locationSearch_).val())
                    }), this.filter_.submit(function() {
                        return !1
                    }), google.maps.event.addListener(this, "geocode", function(a) {
                        if (b.searchPositionTimeout_ && window.clearTimeout(b.searchPositionTimeout_), !a.geometry) return void b.searchPosition(a.name);
                        this.directionsFrom_ = a.geometry.location, b.directionsVisible_ && b.renderDirections_();
                        var c = b.get("view");
                        c.highlight(null);
                        var d = c.getMap();
                        a.geometry.viewport ? d.fitBounds(a.geometry.viewport) : (d.setCenter(a.geometry.location), d.setZoom(parseInt(asl_configuration.zoom_li))), c.refreshView(), b.listenForStoresUpdate_()
                    })), this.settings_.featureFilter) {
                    this.featureFilter_ = a(".asl-p-cont #filter-options"), this.featureFilter_.show(), asl_configuration.show_categories || a(".asl-p-cont .drop_box_filter").remove(), asl_configuration.advance_filter && a(".asl-p-cont .asl-advance-filters").removeClass("hide"), asl_configuration.radius_range = 1e3, asl_configuration.time_switch ? a("#asl-open-close").bind("change", function(a) {
                        asl_configuration.show_opened = this.checked, b.get("view").refreshView(!0), b.stores_changed()
                    }) : a(".asl-p-cont .Status_filter").remove();
                    var d = this.get("view").getViewFeatures().asList();
                    if (this.featureFilter_.find(".inner-filter"), this.storeList_ = a(".asl-p-cont #panel .panel-inner"), asl_configuration.show_categories) {
                        d = asl_underscore.sortBy(d, function(a) {
                            return a.name_
                        });
                        var e = "1" == asl_configuration.single_cat_select ? "" : 'multiple="multiple"';
                        if ("2" == asl_configuration.template && asl_configuration.advance_filter) {
                            for (var f = a(".asl-p-cont .categories-panel"), g = asl_configuration.URL + "public/svg/", h = 0, i = d.length; h < i; h++) {
                                var j = d[h],
                                    k = a('<div class="round-box" data-id="' + j.id_ + '"><div class="iner-box"><div class="box-icon">\t\t\t\t      \t\t\t\t<span style="background-image:url(' + g + j.img_ + ')"></span></div><div class="cat-name"><span>' + j.getDisplayName() + "<br><span>(" + asl_categories[j.id_].len + ")</span></span></div></div></div>");
                                f.append(k), k.data("feature", j)
                            }
                            a(".asl-p-cont .Num_of_store .back-button").bind("click", function(c) {
                                var d = b.get("featureFilter");
                                for (var e in d.array_) d.array_.pop();
                                b.get("view").refreshView(), b.el_.addClass("hide"), a(".asl-p-cont .cats-title").removeClass("hide"), a(".asl-p-cont .Num_of_store").addClass("hide"), f.removeClass("hide")
                            }), f.find(".round-box").bind("click", function(c) {
                                var d = a(this),
                                    e = b.get("featureFilter");
                                for (var g in e.array_) e.array_.pop();
                                var h = d.data("feature");
                                e.add(h), b.set("featureFilter", e), b.get("view").refreshView(), a(".asl-p-cont .Num_of_store .sele-cat").html(h.name_), a(".asl-p-cont .Num_of_store .sele-cat").html(h.len), f.addClass("hide"), a(".asl-p-cont .cats-title").addClass("hide"), a(".asl-p-cont .Num_of_store img").attr("src", asl_configuration.URL + "public/svg/" + h.img_), b.el_.removeClass("hide").animate({
                                    scrollTop: 0
                                }, 0), a(".asl-p-cont .Num_of_store").removeClass("hide")
                            })
                        } else {
                            a(".asl-p-cont .categories_filter").append('<select id="asl-categories" ' + e + ' style="width:350px"></select>');
                            var l = a(".asl-p-cont #asl-categories");
                            if ("1" == asl_configuration.single_cat_select) {
                                var k = a('<option value="0">' + asl_configuration.words.none + "</option>");
                                l.append(k)
                            }
                            for (var h = 0, i = d.length; h < i; h++) {
                                var j = d[h],
                                    k = a('<option  value="' + j.id_ + '">' + j.getDisplayName() + "</option>");
                                k.data("feature", j), l.append(k)
                            }
                            asl_configuration.category && l.val(asl_configuration.category), l.multiselect({
                                enableFiltering: !0,
                                disableIfEmpty: !0,
                                nonSelectedText: asl_configuration.words.select_option,
                                includeSelectAllOption: !1,
                                numberDisplayed: 1,
                                maxHeight: 400,
                                onSelectAll: function(a) {},
                                onChange: function(a, c) {
                                    if ("1" == asl_configuration.single_cat_select) {
                                        var d = b.get("featureFilter");
                                        for (var e in d.array_) d.array_.pop();
                                        var f = a.data("feature");
                                        d.add(f), b.set("featureFilter", d)
                                    } else {
                                        var f = a.data("feature");
                                        b.toggleFeatureFilter_(f)
                                    }
                                    b.get("view").refreshView()
                                }
                            }), a.fn.dropdown || (a(".asl-advance-filters .btn-group").bind("click", function(b) {
                                a(this).toggleClass("open")
                            }), a(".asl-advance-filters,body").bind("click", function(b) {
                                a(b.target).hasClass("multiselect") || a(".asl-advance-filters .btn-group").removeClass("open")
                            }))
                        }
                        this.featureFilter_.find("input").change(function() {
                            var c = a(this).data("feature");
                            b.toggleFeatureFilter_(c), b.get("view").refreshView()
                        })
                    }
                }
                this.directionsPanel_ = a(".asl-p-cont #agile-modal-direction");
                var m = this.directionsPanel_.find(".frm-place");
                m.val(""), b.dest_coords && (o.directionsFrom_ = b.dest_coords);
                var n = this.directionsPanel_.find(".frm-place")[0];
                this.input_search = new google.maps.places.Autocomplete(n);
                var o = this;
                google.maps.event.addListener(this.input_search, "place_changed", function() {
                    o.directionsFrom_ = this.getPlace().geometry.location
                }), this.directionsPanel_.find(".directions-to").attr("readonly", "readonly"), this.directionsVisible_ = !1, this.directionsPanel_.find(".btn-submit").click(function(a) {
                    return b.dest_coords && "Current Location" == m.val() && (b.directionsFrom_ = b.dest_coords || null), b.renderDirections_(), !1
                }), "KM" == asl_configuration.distance_unit ? (b.distance_type = google.maps.UnitSystem.METRIC, b.directionsPanel_.find("#rbtn-km")[0].checked = !0) : b.distance_type = google.maps.UnitSystem.IMPERIAL, b.directionsPanel_.find("input[name=dist-type]").change(function() {
                    b.distance_type = 1 == this.value ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC
                }), this.el_.find(".directions-cont .close").click(function() {
                    b.hideDirections(), a(".asl-p-cont .count-row").removeClass("hide"), a(".asl-p-cont #filter-options").removeClass("hide")
                }), this.directionsPanel_.find(".close-directions").click(function() {
                    b.hideDirections(), a(".asl-p-cont .count-row").removeClass("hide"), a(".asl-p-cont #filter-options").removeClass("hide")
                })
            }, asl_locator.Panel.prototype.toggleFeatureFilter_ = function(a) {
                var b = this.get("featureFilter");
                b.toggle(a), this.set("featureFilter", b)
            }, asl_locator.geocoder_ = new google.maps.Geocoder, asl_locator.Panel.prototype.listenForStoresUpdate_ = function() {
                var a = this,
                    b = this.get("view");
                this.storesChangedListener_ && google.maps.event.removeListener(this.storesChangedListener_), this.storesChangedListener_ = google.maps.event.addListenerOnce(b, "stores_changed", function() {
                    a.set("stores", b.get("stores"))
                })
            }, asl_locator.Panel.prototype.searchPosition = function(a) {
                var b = this,
                    c = {
                        address: a,
                        bounds: this.get("view").getMap().getBounds()
                    };
                asl_locator.geocoder_.geocode(c, function(a, c) {
                    c == google.maps.GeocoderStatus.OK && google.maps.event.trigger(b, "geocode", a[0])
                })
            }, asl_locator.Panel.prototype.setView = function(a) {
                this.set("view", a)
            }, asl_locator.Panel.prototype.view_changed = function() {
                var a = this,
                    c = this.get("view");
                this.bindTo("selectedStore", c), window.test_panel = a, this.geolocationListener_ && google.maps.event.removeListener(this.geolocationListener_), this.zoomListener_ && google.maps.event.removeListener(this.zoomListener_), this.idleListener_ && google.maps.event.removeListener(this.idleListener_);
                var d = (c.getMap().getCenter(), function() {
                    b.pan_mode || a.listenForStoresUpdate_()
                });
                this.geolocationListener_ = google.maps.event.addListener(c, "load", d), this.zoomListener_ = google.maps.event.addListener(c.getMap(), "zoom_changed", d), this.idleListener_ = google.maps.event.addListener(c.getMap(), "idle", function() {
                    return a.idle_(c.getMap())
                }), d(), this.bindTo("featureFilter", c), this.autoComplete_ && this.autoComplete_.bindTo("bounds", c.getMap())
            }, asl_locator.Panel.prototype.initAutocomplete_ = function() {
                var b = this,
                    c = a(".asl-p-cont #auto-complete-search")[0],
                    d = {};
                asl_configuration.google_search_type && (d.types = ["(" + asl_configuration.google_search_type + ")"]), asl_configuration.country_restrict && (d.componentRestrictions = {
                    country: asl_configuration.country_restrict.toLowerCase()
                }), this.autoComplete_ = new google.maps.places.Autocomplete(c, d), this.get("view") && this.autoComplete_.bindTo("bounds", this.get("view").getMap()), google.maps.event.addListener(this.autoComplete_, "place_changed", function() {
                    var a = this.getPlace();
                    asl_configuration.analytics && asl_locator.save_analytics(a), a.geometry && b.get("view").measure_distance(a.geometry.location), google.maps.event.trigger(b, "geocode", a)
                })
            }, asl_locator.Panel.prototype.idle_ = function(a) {
                this.center_ ? a.getBounds().contains(this.center_) || (this.center_ = a.getCenter(), this.listenForStoresUpdate_()) : this.center_ = a.getCenter()
            }, asl_locator.Panel.prototype.stores_changed = function() {
                if (this.get("stores")) {
                    var b = this,
                        c = this.get("view");
                    if (!(c.showing_direction || asl_configuration.accordion && c.is_updated)) {
                        c.is_updated = !0;
                        var d = c && c.getMap().getBounds(),
                            e = c.get("stores"),
                            f = this.get("selectedStore");
                        asl_configuration.accordion || this.storeList_.empty(), e.length ? d && !d.contains(e[0].getLocation()) ? a(".asl-p-cont .Num_of_store .count-result").html(e.length) : a(".asl-p-cont .Num_of_store .count-result").html(e.length) : (a(".asl-p-cont .Num_of_store .count-result").html("0"), b.storeList_.html('<div class="asl-overlay-on-item" id="asl-no-item-found"><div class="white"></div><h1 class="h1">' + asl_configuration.no_item_text + "</h1></div>"));
                        var g = function(b) {
                            var d = a(b.target);
                            return d.hasClass("s-direction") ? void b.preventDefault() : void("A" != b.target.tagName && (c.noRefreshList = !0, c.highlight(this.store, !0)))
                        };
                        if (asl_configuration.accordion) {
                            var h = this.get("view").data_,
                                i = (h.stateCities, h.countries ? h.generateHTMLCountriesStates(h.stateCities) : h.generateHTMLStates(h.stateCities));
                            a(".asl-p-cont #p-statelist").html(i), h.countries && a(".asl-p-cont #p-statelist").attr("id", "p-countlist"), a(".asl-p-cont #panel .load-more").bind("click", function() {
                                a(this).parent().addClass("reveal-it")
                            }), a(".asl-p-cont #panel .hide-more").bind("click", function() {
                                a(this).parent().removeClass("reveal-it")
                            })
                        }
                        for (var j = 0, k = Math.min(1e3, e.length); j < k; j++) {
                            var l = e[j].getInfoPanelItem();
                            if (l.store = e[j], f && e[j].id_ == f.id_ && a(l).addClass("highlighted"), l.clickHandler_ || (l.clickHandler_ = google.maps.event.addDomListener(l, "click", g)), a(l).find(".s-direction").click(function(c) {
                                    var d = a(this).data("_store");
                                    b.directionsTo_ = d, b.showDirections(d)
                                }).data("_store", e[j]), asl_configuration.accordion) {
                                var m = "#city-list-" + e[j].props_.city.replace(/[^a-z0-9\s]/gi, "").replace(/[ ]/gi, "-").toLowerCase();
                                a(m).append(l)
                            } else b.storeList_.append(l)
                        }
                    }
                }
            }, asl_locator.Panel.prototype.selectedStore_changed = function() {
                var b = this,
                    c = this.get("selectedStore");
                if (c) {
                    this.directionsTo_ = c, this.storeList_.find("#store-" + c.id_).addClass("highlighted"), this.settings_.directions && this.directionsPanel_.find(".directions-to").val(c.getDetails().title);
                    var d = b.get("view").getInfoWindow().getContent(),
                        e = a("<a/>").text(asl_configuration.words.direction).attr("href", "javascript:void(0)").addClass("action").addClass("directions"),
                        f = a("<a/>").text(asl_configuration.words.zoom).attr("href", "javascript:void(0)").addClass("action").addClass("zoomhere"),
                        g = c.props_.website;
                        b.get("view").getMap().setOptions({
                            center: c.getLocation(),
                            zoom: 16
                        })
                    if (e.click(function() {
                            return b.showDirections(), !1
                        }), f.click(function() {
                            b.get("view").getMap().setOptions({
                                center: c.getLocation(),
                                zoom: 16
                            })
                        }), a(d).find(".asl-buttons").append(e).append(f), g) {
                        var h = a("<a/>").attr("target", "_Blank").text(asl_configuration.words.detail).attr("href", g).addClass("action");
                        a(d).find(".asl-buttons").append(h)
                    }
                }
            }, asl_locator.Panel.prototype.hideDirections = function() {
                this.directionsVisible_ = !1, this.directionsPanel_.removeClass("in"), this.el_.find(".directions-cont").addClass("hide"), this.storeList_.fadeIn(), this.directionsRenderer_.setMap(null);
                var a = this.get("view");
                a.showing_direction = !1
            }, asl_locator.Panel.prototype.showDirections = function(a) {
                var b = this.get("selectedStore") || a;
                b && (this.directionsPanel_.find(".frm-place").val(this.dest_coords ? "Current Location" : ""), this.directionsPanel_.find(".directions-to").val(b.getDetails().title), this.directionsPanel_.addClass("in"), this.renderDirections_(), this.directionsVisible_ = !0)
            }, asl_locator.Panel.prototype.renderDirections_ = function() {
                var b = this;
                if (this.directionsFrom_ && this.directionsTo_) {
                    this.el_.find("#map-loading").show(), this.el_.find(".directions-cont").removeClass("hide"), this.storeList_.fadeOut(), b.directionsPanel_.removeClass("in");
                    var c = this.el_.find(".rendered-directions").empty();
                    this.directionsService_.route({
                        origin: this.directionsFrom_,
                        destination: this.directionsTo_.getLocation(),
                        travelMode: google.maps.DirectionsTravelMode.DRIVING,
                        unitSystem: b.distance_type
                    }, function(d, e) {
                        if (b.el_.find("#map-loading").hide(), e == google.maps.DirectionsStatus.OK) {
                            a(".asl-p-cont .count-row").addClass("hide"), a(".asl-p-cont #filter-options").addClass("hide");
                            var f = b.get("view");
                            f.showing_direction = !0;
                            var g = b.directionsRenderer_;
                            g.setPanel(c[0]), g.setMap(b.get("view").getMap()), g.setDirections(d)
                        }
                    }), this.directionsFrom_ = null
                }
            }, asl_locator.Panel.prototype.featureFilter_changed = function() {
                this.listenForStoresUpdate_()
            }, asl_locator.View.prototype.filter = function(text_array) {
                var stores = this.data_.stores_;
                if(text_array.length != 0){
                    for (key = 0; key < stores.length; key++) {
                        var flag = 0;
                        service = stores[key].props_.service;
                        if(service != null){
                            for(i = 0; i< text_array.length; i++){
                                if(service.indexOf("service"+text_array[i]) != -1){
                                    flag++;
                                }
                            }
                            if(flag != text_array.length){
                            	if(stores[key].marker_ != null)
                                stores[key].marker_.visible = false;

                            }else{
                            	if(stores[key].marker_ != null)
                                stores[key].marker_.visible = true;
                            }
                        }else{
                        	if(stores[key].marker_ != null)
                            stores[key].marker_.visible = false;
                        }
                        this.refreshView(stores[key]);
                    }
                }else{
                    for (key = 0; key < stores.length; key++) {
                        service = stores[key].props_.service;
                        if(stores[key].marker_.visible == false){
                            stores[key].marker_.visible = true;
                        }
                        this.refreshView(stores[key]);
                    }
                }
            }, asl_locator.PanelOptions = function() {}, asl_locator.prototype.locationSearch, asl_locator.PanelOptions.prototype.locationSearchLabel, asl_locator.PanelOptions.prototype.featureFilter, asl_locator.PanelOptions.prototype.directions, asl_locator.PanelOptions.prototype.view
        }
    }(asl_jQuery),
        function(jQuery, _) {
            var map = null,
                asl_engine = {
                    config: {},
                    helper: {}
                };
            if (window.asl_engine = asl_engine, window.asl_configuration) {
                asl_configuration.accordion = "1" == asl_configuration.layout, asl_configuration.analytics = "1" == asl_configuration.analytics, asl_configuration.sort_by_bound = "1" == asl_configuration.sort_by_bound, asl_configuration.scroll_wheel = "1" == asl_configuration.scroll_wheel, asl_configuration.distance_slider = "1" == asl_configuration.distance_slider, asl_configuration.show_categories = "0" != asl_configuration.show_categories, asl_configuration.time_switch = "0" != asl_configuration.time_switch, asl_configuration.category_marker = "0" != asl_configuration.category_marker, asl_configuration.advance_filter = "0" != asl_configuration.advance_filter, asl_configuration.time_24 = "1" == asl_configuration.time_format, "1" != asl_configuration.load_all && (asl_configuration.search_type = "0"), asl_configuration.accordion && (asl_configuration.load_all = "1", asl_configuration.advance_filter = !1), asl_configuration.advance_filter ? jQuery("#asl-open-close")[0].checked = !0 : jQuery(".asl-p-cont").addClass("no-asl-filters");
                var asl_lat = asl_configuration.default_lat ? parseFloat(asl_configuration.default_lat) : 39.9217698526,
                    asl_lng = asl_configuration.default_lng ? parseFloat(asl_configuration.default_lng) : -75.5718432,
                    categories = {},
                    asl_date = new Date;
                asl_configuration.show_opened = !0, jQuery("#asl-dist-unit").html(asl_configuration.distance_unit), asl_engine.helper.asl_leadzero = function(a) {
                    return a > 9 ? "" + a : "0" + a
                }, asl_engine.helper.asl_timeConvert = function(a) {
                    var b = a,
                        c = Number(b.match(/^(\d+)/)[1]),
                        d = Number(b.match(/:(\d+)/)[1]),
                        e = b.match(/\s(.*)jQuery/);
                    return e && e[1] && (e = e[1], "PM" == e && c < 12 && (c += 12), "AM" == e && 12 == c && (c -= 12)), c + d / 100
                }, asl_engine.helper.between = function(a, b, c) {
                    return a > b && a < c
                }, asl_engine.helper.implode = function(a, b) {
                    for (var c = [], d = 0, e = a.length; d < e; d++) a[d] && c.push(a[d]);
                    return c.join(b)
                }, asl_engine.helper.toObject_ = function(a, b) {
                    for (var c = {}, d = 0, e = b.length; d < e; d++) c[a[d]] = b[d];
                    return c
                }, asl_engine.helper.distanceCalc = function(a) {
                    var b = 6371,
                        c = this.getLocation(),
                        d = asl_locator.toRad_(c.lat()),
                        e = asl_locator.toRad_(c.lng()),
                        f = asl_locator.toRad_(a.lat()),
                        g = asl_locator.toRad_(a.lng()),
                        h = f - d,
                        i = g - e,
                        j = Math.sin(h / 2) * Math.sin(h / 2) + Math.cos(d) * Math.cos(f) * Math.sin(i / 2) * Math.sin(i / 2),
                        k = 2 * Math.atan2(Math.sqrt(j), Math.sqrt(1 - j));
                    return b * k
                }, asl_engine.dataSource = function() {
                    this.stores_ = [], this.remote_url = ASL_REMOTE.ajax_url
                }, asl_engine.dataSource.prototype.getCountriesStateCities = function(a) {
                    for (var b = {}, c = 0; c < a.length; c++) b[a[c].props_.country] || (b[a[c].props_.country] = {}), b[a[c].props_.country][a[c].props_.state] || (b[a[c].props_.country][a[c].props_.state] = []), b[a[c].props_.country][a[c].props_.state].indexOf(a[c].props_.city) == -1 && b[a[c].props_.country][a[c].props_.state].push(a[c].props_.city);
                    return b
                }, asl_engine.dataSource.prototype.getStateCities = function(a) {
                    for (var b = {}, c = 0; c < a.length; c++) b[a[c].props_.state] || (b[a[c].props_.state] = []), b[a[c].props_.state].indexOf(a[c].props_.city) == -1 && b[a[c].props_.state].push(a[c].props_.city);
                    return b
                }, asl_engine.dataSource.prototype.generateHTMLCountriesStates = function(a) {
                    var b = "",
                        c = Object.keys(a).sort();
                    for (var d in c)
                        if (c.hasOwnProperty(d)) {
                            b += '<li class="item-state panel">\t                <a class="collapsed" href="#collapse-' + d + '"  aria-controls="collapse-' + d + '" data-parent="#p-countlist" data-toggle="collapse"><span>' + c[d] + '</span></a>\t                <div id="collapse-' + d + '" class="collapse" role="tabpanel">\t                <ul id="p-statelist-' + d + '">';
                            var e = Object.keys(a[c[d]]).sort();
                            for (var f in e)
                                if (e.hasOwnProperty(f)) {
                                    b += '<li class="item-state panel">\t\t                  <a class="collapsed" href="#collapse' + f + "-" + d + '"  aria-controls="collapse' + f + "-" + d + '" data-parent="#p-statelist-' + d + '" data-toggle="collapse"><span>' + e[f] + '</span></a>\t\t                  <div id="collapse' + f + "-" + d + '" class="collapse" role="tabpanel">\t\t                  <ul id="item-city-' + f + "-" + d + '">';
                                    var g = a[c[d]][e[f]].sort();
                                    for (var h in g) g.hasOwnProperty(h) && (b += '<li class="panel"><a class="collapsed" href="#collapse' + d + "-" + f + "-" + h + '" data-parent="#item-city-' + f + "-" + d + '" data-toggle="collapse"><span>' + g[h] + '</span></a>\t\t            \t\t\t<div class="collapse" id="collapse' + d + "-" + f + "-" + h + '" role="tabpanel"><div id="city-list-' + g[h].replace(/[^a-z0-9\s]/gi, "").replace(/[ ]/gi, "-").toLowerCase() + '"></div></div></li>');
                                    b += "</ul></div></li>"
                                }
                            b += "</ul></div></li>"
                        }
                    return b
                }, asl_engine.dataSource.prototype.generateHTMLStates = function(a) {
                    var b = "",
                        c = Object.keys(a).sort();
                    for (var d in c)
                        if (c.hasOwnProperty(d)) {
                            b += '<li class="item-state panel">\t\t                <a class="collapsed" href="#collapse' + d + '"  aria-controls="collapse' + d + '" data-parent="#p-statelist" data-toggle="collapse"><span>' + c[d] + '</span></a>\t\t                <div id="collapse' + d + '" class="collapse" role="tabpanel">\t\t                <ul id="item-city-' + d + '">';
                            var e = a[c[d]].sort();
                            for (var f in e) e.hasOwnProperty(f) && (b += '<li class="panel"><a class="collapsed" href="#collapse' + d + "-" + f + '" data-parent="#item-city-' + d + '" data-toggle="collapse"><span>' + e[f] + '</span></a>\t\t            <div class="collapse" id="collapse' + d + "-" + f + '" role="tabpanel"><div id="city-list-' + e[f].replace(/[^a-z0-9\s]/gi, "").replace(/[ ]/gi, "-").toLowerCase() + '"></div></div></li>');
                            b += "</ul></div></li>"
                        }
                    return b
                }, asl_engine.dataSource.prototype.sortDistance = function(a, b) {
                    b.sort(function(b, c) {
                        return b.distanceTo(a) - c.distanceTo(a)
                    })
                };
                var asl_first_load = !1,
                    asl_view = null,
                    asl_panel = null;
                asl_engine.dataSource.prototype.fetch_remote_data = function(a) {
                    var b = this;
                    jQuery(".asl-p-cont .asl-overlay").show();
                    var c = {
                        action: "asl_load_stores",
                        nonce: ASL_REMOTE.nonce,
                        load_all: asl_configuration.load_all,
                        layout: asl_configuration.layout ? 1 : 0,
                        map_id: asl_configuration.map_id
                    };
                    if ("1" != asl_configuration.load_all) {
                        var d = map.getBounds(),
                            e = d.getNorthEast(),
                            f = d.getSouthWest(),
                            g = d.getCenter();
                        c.lat = g.lat(), c.lng = g.lng(), c.nw = [e.lat(), f.lng()], c.se = [f.lat(), e.lng()]
                    }
                    asl_configuration.category && (c.category = asl_configuration.category), jQuery.ajax({
                        url: ASL_REMOTE.ajax_url,
                        data: c,
                        type: "GET",
                        dataType: "json",
                        success: function(c) {
                            b.stores_ = b.parseData(c), "1" == asl_configuration.search_type && asl_locator.add_location_search(c, jQuery("#asl-storelocator #auto-complete-search"));
                            var d = b.stores_,
                                e = d[0] ? d[0].props_.country : null;
                            b.countries = !1;
                            for (var f = 0; f < d.length; f++)
                                if (e != d[f].props_.country) {
                                    b.countries = !0;
                                    break
                                }
                            if (b.stateCities = b.countries ? b.getCountriesStateCities(d) : b.getStateCities(d), !asl_first_load) {
                                asl_first_load = !0, asl_view = new asl_locator.View(map, b, {
                                    geolocation: !1,
                                    features: b.getDSFeatures()
                                }), asl_panel = new asl_locator.Panel(document.getElementById("panel"), {
                                    view: asl_view
                                }), asl_view._panel = asl_panel;
                                var g = jQuery(".asl-p-cont #asl-geolocation-agile-modal");
                                if (g.find(".close").bind("click", function(a) {
                                        g.removeClass("in"), window.setTimeout(function() {
                                            g.css("display", "none")
                                        }, 300)
                                    }), "0" != asl_configuration.prompt_location && (g.css("display", "block"), window.setTimeout(function() {
                                        g.addClass("in")
                                    }, 300), jQuery(".asl-p-cont #asl-btn-geolocation").bind("click", function() {
                                        asl_view.geolocate_(), g.removeClass("in").css("display", "none")
                                    })), "2" == asl_configuration.prompt_location) {
                                    var h = null;
                                    jQuery("#asl-btn-locate").click(function(a) {
                                        h && jQuery("#asl-current-loc").val() && (asl_view.measure_distance(h.geometry.location), g.removeClass("in").css("display", "none"), asl_configuration.analytics)
                                    });
                                    var i = jQuery(".asl-p-cont #asl-current-loc")[0],
                                        j = {};
                                    asl_configuration.google_search_type && (j.types = ["(" + asl_configuration.google_search_type + ")"]), asl_configuration.country_restrict && (j.componentRestrictions = {
                                        country: asl_configuration.country_restrict.toLowerCase()
                                    });
                                    var k = new google.maps.places.Autocomplete(i, j);
                                    google.maps.event.addListener(k, "place_changed", function() {
                                        var a = this.getPlace();
                                        h = a
                                    })
                                }
                                jQuery(".mark_hidden").click(function () {
                                    jQuery(".map__main>.title_map").hide();
                                    jQuery(".mark_hidden").hide();
                                })
                                jQuery(".choose-map a").bind("click", function(a){
                                    a.preventDefault();
                                    asl_view.geolocate_()
                                })
                                var click = 0;
                                jQuery("input[type='checkbox']").click(function(){
                                    var choose_check = [];
                                    var text = '';
                                    jQuery("input[type='checkbox']:checked").each(function(i){
                                        val = jQuery(this).val();
                                        if(val){
                                            choose_check.push(val);
                                        }
                                    });
                                    if(choose_check.length > 0){
                                        asl_view.filter(choose_check);
                                    }else{
                                        asl_view.filter(choose_check);
                                    }
                                    var choose_check = [];
                                    var text = '.';
                                    jQuery("input[type='checkbox']:checked").each(function (i) {
                                        val = jQuery(this).val();
                                        if (val) {
                                            choose_check.push(val);
                                        }
                                    });
                                    if (choose_check.length > 0) {
                                        jQuery("#asl-storelocator .asl-panel").addClass('active');
                                        jQuery("#asl-storelocator .asl-map").addClass('active');
                                        if (!jQuery(".gm-style").hasClass("click")) {
                                            jQuery(".gm-style").addClass("active");
                                            jQuery(".gm-style").addClass("click");
                                            click = 1;
                                        }
                                        jQuery(".map__main>.title_map").hide();
                                        jQuery(".mark_hidden").hide();
                                        for (i = 0; i < choose_check.length; i++) {
                                            if (i < choose_check.length - 1) {
                                                text += "service" + choose_check[i] + ".";
                                            } else {
                                                text += "service" + choose_check[i];
                                            }

                                        }
                                        jQuery(".panel-inner .item").fadeOut(200);
                                        jQuery(text).fadeIn(200);
                                    } else {
                                        jQuery(".panel-inner .item").show().css({"opacity": "1"});
                                    }
                                });
                            }
                            asl_view.refreshView(!0), jQuery(".asl-p-cont .asl-overlay").hide(), a && map.panTo(a)
                        },
                        dataType: "json"
                    }), b.pos = g
                }, asl_engine.dataSource.prototype.load_locator = function() {
                    var that = this,
                        maps_params = {
                            center: new google.maps.LatLng(asl_lat, asl_lng),
                            zoom: parseInt(asl_configuration.zoom),
                            scrollwheel: asl_configuration.scroll_wheel,
                            mapTypeId: asl_configuration.map_type
                        };
                    asl_configuration.maxZoom && !isNaN(asl_configuration.maxZoom) && (maps_params.maxZoom = parseInt(asl_configuration.maxZoom)), asl_configuration.minZoom && !isNaN(asl_configuration.minZoom) && (maps_params.minZoom = parseInt(asl_configuration.minZoom)), map = new google.maps.Map(document.getElementById("map-canvas"), maps_params), _asl_map_customize.trafic_layer && 1 == _asl_map_customize.trafic_layer && (trafic_layer = new google.maps.TrafficLayer, trafic_layer.setMap(map)), _asl_map_customize.bike_layer && 1 == _asl_map_customize.bike_layer && (bike_layer = new google.maps.BicyclingLayer, bike_layer.setMap(map)), _asl_map_customize.transit_layer && 1 == _asl_map_customize.transit_layer && (transit_layer = new google.maps.TransitLayer, transit_layer.setMap(map)), _asl_map_customize.drawing && asl_drawing.loadData(_asl_map_customize.drawing, map);
                    var _features = [];
                    for (var i in asl_categories) {
                        var cat = asl_categories[i];
                        that.FEATURES_.add(new asl_locator.Feature(cat.id, cat.name, cat.icon))
                    }
                    "1" == asl_configuration.load_all ? that.fetch_remote_data() : google.maps.event.addListener(map, "idle", function() {
                        var a = null;
                        asl_view && asl_view.marker_clicked && (a = asl_view.marker_center, asl_view.marker_clicked = !1), that.fetch_remote_data(a)
                    })
                }, asl_engine.dataSource.prototype.FEATURES_ = new asl_locator.FeatureSet, asl_engine.dataSource.prototype.getDSFeatures = function() {
                    return this.FEATURES_
                }, asl_engine.dataSource.prototype.parseData = function(a) {
                    var b = [],
                        c = asl_date.getHours() + asl_date.getMinutes() / 100,
                        d = asl_date.getDay(),
                        e = asl_categories;
                    asl_categories = {};
                    var f = Object.keys(e);
                    var latlngs;
                    for (var g in f) "object" == typeof e[f[g]] && (asl_categories[String(f[g])] = e[f[g]], asl_categories[f[g]].len = 0);
                    for (var h = 0; h < a.length; h++) {
                        var i = a[h];
                        //var geocoder = new google.maps.Geocoder;
                        //var service = new google.maps.places.PlacesService(map);
                        i.lat = parseFloat(i.lat); i.lng = parseFloat(i.lng);
                        latlngs = {lat: i.lat, lng: i.lng};
                        /*console.log(latlngs);
                        getPlace(latlngs, i.api);
                        var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + add + '&sensor=true';
                        jQuery.getJSON( url, {
                            tags: "mount rainier",
                            tagmode: "any",
                            format: "json"
                        })
                            .done(function( data ) {
                                var location = data.results[0].geometry.location;
                                icon = path.url + "/img/default-click.png";
                                var map = new google.maps.Map(document.getElementById('map-canvass'), {
                                    zoom: 13,
                                    center: location,
                                    scrollwheel: false,
                                    zoomControl: true,
                                });
                                var marker = new google.maps.Marker({
                                    position: location,
                                    map: map,
                                    draggable: true,
                                    icon: icon
                                });
                                var event_name = jQuery(".event__box:first-child h2").text();
                                var content = '';
                                content += '<div class="infoBox">';
                                content += '<div class="infoWindow ">';
                                content += '<h3 >'+event_name+'</h3>';
                                content += '<div class="infowindowContent">';
                                content += '<div class="info-addr">';
                                content += '<div class="address"><span class="glyphicon glyphicon-map-marker"></span>'+add+'</div>';
                                content += "</div>";
                                content += "</div>";
                                content += '<div class="arrow-down"></div>';
                                content += '</div>';
                                content += '</div>';
                                infowindow = new google.maps.InfoWindow({
                                    content: content
                                });
                                infowindow.open(map, marker);
                            });*/
                        var j = new google.maps.LatLng(i.lat, i.lng),
                            k = asl_engine.helper.implode([i.city, i.state, i.postal_code], ", "),
                            l = [i.street, k];
                        i.address = asl_engine.helper.implode(l, " ");
                        var m = i.categories ? i.categories.split(",") : [],
                            n = [];
                        if (asl_configuration.show_categories) {
                            var o = [];
                            for (var p in m) {
                                var q = m[p].toString();
                                asl_categories[q] ? (asl_categories[q].len++, n.push(asl_categories[q]), o.push(asl_categories[q].name)) : delete m[p]
                            }
                            i.c_names = asl_engine.helper.implode(o, ", "), i.categories = n
                        }
                        if (i.city = jQuery.trim(i.city), i.country = jQuery.trim(i.country), asl_configuration.additional_info || (i.description_2 = null), i.marker_id = i.marker_id ? i.marker_id.toString() : "", i.start_time && i.end_time) {
                            i.time_per_day && (i.start_time = i["start_time_" + d] || i.start_time, i.end_time = i["end_time_" + d] || i.end_time);
                            var r = 0 != i.start_time ? asl_engine.helper.asl_timeConvert(i.start_time) : 0,
                                s = 0 != i.end_time ? asl_engine.helper.asl_timeConvert(i.end_time) : 24;
                            if (0 == s && (s = 24), i.open = asl_engine.helper.between(c, r, s), asl_configuration.time_24) {
                                r += .01, r = parseFloat(r).toFixed(2);
                                var t = String(r).split(".");
                                t[0] = asl_engine.helper.asl_leadzero(parseInt(t[0])), t[1] = asl_engine.helper.asl_leadzero(parseInt(t[1]) - 1), i.start_time = t.join(":"), s += .01, s = parseFloat(s).toFixed(2);
                                var u = String(s).split(".");
                                u[0] = asl_engine.helper.asl_leadzero(parseInt(u[0])), u[1] = asl_engine.helper.asl_leadzero(parseInt(u[1]) - 1), i.end_time = u.join(":")
                            }
                            i.days && (asl_underscore.contains(i.days, String(d)) || (i.open = !1))
                        } else i.open = !0;
                        var v = new asl_locator.Store(i.id, j, m, i);
                        b.push(v)
                    }
                    return b
                };
                /*function getPlace(latlng, api){
                    var geocoder = new google.maps.Geocoder;
                    var service = new google.maps.places.PlacesService(map);
                    geocoder.geocode({'location': latlng}, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                service.getDetails({
                                    placeId: results[1].place_id
                                }, function (place, status) {
                                    if (status === google.maps.places.PlacesServiceStatus.OK) {

                                        /!*!// Create marker
                                         var marker = new google.maps.Marker({
                                         map: map,
                                         position: place.geometry.location
                                         });*!/

                                        /!* // Center map on place location
                                         map.setCenter(place.geometry.location);*!/

                                        // Get DIV element to display opening hours
                                        /!* var opening_hours_div = document.getElementById("opening-hours");*!/
                                        console.log(results[1]);
                                        // Loop through opening hours weekday text
                                        /!*if(place.opening_hours != null) {
                                         for (var i = 0; i < place.opening_hours.weekday_text.length; i++) {

                                         // Create DIV element and append to opening_hours_div
                                         var content = document.createElement('div');
                                         content.innerHTML = place.opening_hours.weekday_text[i];
                                         opening_hours_div.appendChild(content);

                                         }
                                         console.log(place.opening_hours);
                                         }*!/
                                    }
                                });
                            }
                        }
                    });
                }*/
                var data_source = new asl_engine.dataSource;
                data_source.getStores = function(a, b, c, d) {
                    for (var e, f = [], g = 0; e = this.stores_[g]; g++) e.hasAnyCategory(b) && f.push(e);
                    f && asl_view.dest_coords ? this.sortDistance(asl_view.dest_coords, f) : a && asl_configuration.sort_by_bound && this.sortDistance(a.getCenter(), f), c(f)
                }, google.maps.event.addDomListener(window, "load", function() {
                    data_source.load_locator()
                })
            }
        }(asl_jQuery, asl_underscore)
});