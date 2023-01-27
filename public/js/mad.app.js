var Mad = (function (e) {
	"use strict";
	var t = {},
		i = e.Deferred(),
		n = e("body"),
		s = e(document);
	function a(t, i) {
		(this.$element = t),
			(this.config = e.extend(a.config, i)),
			Object.defineProperties(this, {
				bottomLevelElementClass: {
					get: function () {
						return (
							this.config.cssPrefix +
							this.config.classMap.bottomLevelElement
						);
					},
				},
				topLevelElementClass: {
					get: function () {
						return (
							this.config.cssPrefix +
							this.config.classMap.topLevelElement
						);
					},
				},
			});
	}
	if (
		((t.modules = {}),
		(t.helpers = {}),
		(t._localCache = {}),
		(t.ISTOUCH = Modernizr.touchevents),
		(t.ANIMATIONDURATION = 500),
		(t.ANIMATIONEASING = "easeOutQuart"),
		(t.ANIMATIONSUPPORTED = Modernizr.cssanimations),
		(t.ANIMATIONEND =
			"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"),
		(t.RTL = "rtl" === getComputedStyle(document.body).direction),
		(t.ISLEGACYBROWSER = !Modernizr.flexbox),
		(t.ISFIREFOX = -1 != window.navigator.userAgent.indexOf("Firefox")),
		(t.afterDOMReady = function () {
			var t = this;
			if (
				(this.ISFIREFOX && (window.onunload = function () {}),
				this.ISLEGACYBROWSER)
			)
				return (
					this.helpers.showCriticalFullScreenMessage &&
						this.helpers.showCriticalFullScreenMessage({
							before: '<i class="icon icon-sad"></i>',
							content:
								"Your browser does not support some technologies this site use. Please update your browser or visit the site using more modern browser.",
						}),
					void (this.modules.preloader && this.modules.preloader())
				);
			if (
				(this.modules.backToTop &&
					this.modules.backToTop({
						easing: "easeOutQuint",
						speed: 550,
						cssPrefix: "mad-",
					}),
				this.helpers.toggledFields && this.helpers.toggledFields(),
				window.MadEventsCalendar &&
					window.MadEventsCalendar.init(e(".mad-events-calendar"), {
						isTouch: t.ISTOUCH,
						cssPrefix: "mad-",
						breakpoint: 768,
					}),
				window.MadSidebarHidden &&
					new window.MadSidebarHidden({ cssPrefix: "mad-" }),
				window.MadStickyHeaderSection)
			) {
				var n = e(
					'[class*="mad-header-section--sticky"]:not([class*="mad-header-section--sticky-hidden"])'
				);
				n.length &&
					new window.MadStickyHeaderSection(n, {
						animationEasing: t.ANIMATIONEASING,
						animationDuration: t.ANIMATIONDURATION,
					});
			}
			this.modules.dropdown && this.modules.dropdown.init(),
				this.modules.closeBtn && this.modules.closeBtn(),
				this.modules.hiddenSections && this.modules.hiddenSections(),
				this.modules.bgMove && this.modules.bgMove(),
				this.modules.viewTypes && this.modules.viewTypes(),
				this.helpers.calendarWidget && this.helpers.calendarWidget();
			var s = e(".mad-range-slider");
			e.fn.slider &&
				s.length &&
				s.slider({
					range: !0,
					min: 0,
					max: 499,
					values: [5, 299],
					slide: function (t, i) {
						var n = e(i.handle).closest(".mad-range-slider"),
							s = n.siblings(".mad-range-slider-input");
						n.length &&
							s.length &&
							s
								.attr(
									"value",
									"$" +
										n.slider("values", 0) +
										" - $" +
										n.slider("values", 1)
								)
								.val(
									"Price:$" +
										n.slider("values", 0) +
										",00 - $" +
										n.slider("values", 1) +
										",00"
								);
					},
				});
			var a = e(".mad-twitter-feed");
			a.length &&
				e.fn.tweetie &&
				a.tweetie({
					url: "http://velikorodnov.com/html/legasy/vendors/tweetie/api/php/server.php",
					type: "timeline",
					template:
						'<li>                        <div class="mad-tweet">                            <div class="mad-tweet-content">{{tweet.text}}</div>                                                     </div>                    </li>',
					dateFormat: "%B %d, %Y",
					params: {
						count: 2,
						screen_name: null,
						list_id: null,
						slug: null,
						q: null,
						exclude_replies: !1,
						include_rts: !1,
					},
				});
			var o = e(".mad-custom-select");
			o.length && o.MadCustomSelect({ cssPrefix: "mad-" });
			var l = e(".mad-newsletter-form");
			l.length && window.MadNewsletter && window.MadNewsletter(l);
			var r = e(".mad-contact-form");
			r.length && window.MadContactForm && MadContactForm.init(r),
				e.fancybox &&
					e.fancybox.defaults &&
					e.extend(e.fancybox.defaults, {
						transitionEffect: "slide",
						transitionDuration: t.ANIMATIONDURATION,
						animationDuration: t.ANIMATIONDURATION,
					}),
				this.modules.arcticModals &&
					this.modules.arcticModals.init(e("[data-arctic-modal]"));
			var d = e(".mad-navigation"),
				c = e(".mad-navigation-vertical");
			d.length &&
				d.MonkeysanNav({ cssPrefix: "mad-", mobileBreakpoint: 1080 }),
				c.length &&
					c.MonkeysanNav({
						cssPrefix: "mad-",
						mobileBreakpoint: 1e4,
					});
			var m = e(".mad-countdown");
			m.length &&
				m.each(function () {
					var t = e(this),
						i = t.data(),
						n = new Date(
							i.year,
							i.month || 0,
							i.day || 1,
							i.hours || 0,
							i.minutes || 0,
							i.seconds || 0
						);
					t.countdown({
						until: n,
						padZeroes: !0,
						format: "dHMS",
						labels: [
							"Years",
							"Month",
							"Weeks",
							"Days",
							"Hours",
							"Minutes",
							"Seconds",
						],
						labels1: [
							"Years",
							"Month",
							"Weeks",
							"Days",
							"Hours",
							"Minutes",
							"Seconds",
						],
					});
				});
			var h = e("#rev-slider-1");
			h.length &&
				e.fn.revolution &&
				h.show().revolution({
					dottedOverlay: "mad",
					disableProgressBar: "on",
					spinner: "spinner3",
					gridwidth: [1488, 1024, 1024, 580],
					gridheight: [1064, 1064, 1064, 1064],
					responsiveLevels: [1440, 1024, 820, 580],
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						onHoverStop: "false",
						arrows: { enable: !1 },
						bullets: {
							enable: !0,
							style: "mad",
							hide_onleave: !1,
							h_align: "center",
							v_align: "bottom",
							direction: "horisontal",
							h_offset: 0,
							v_offset: 40,
						},
					},
				});
			var g = e("#rev-slider-2");
			g.length &&
				e.fn.revolution &&
				g.show().revolution({
					dottedOverlay: "mad",
					disableProgressBar: "on",
					spinner: "spinner3",
					gridwidth: [1700, 1280, 1024, 580],
					gridheight: [920, 920, 720, 720],
					responsiveLevels: [1440, 1280, 1024, 580],
					navigation: {
						keyboardNavigation: "on",
						keyboard_direction: "horizontal",
						onHoverStop: "false",
						arrows: { enable: !1 },
						bullets: { enable: !1 },
					},
				});
			var u = e(".mad-panels--accordion"),
				f = e(".mad-panels--toggles");
			u.length &&
				u.MonkeysanAccordion({
					easing: t.ANIMATIONEASING,
					speed: t.ANIMATIONDURATION,
					cssPrefix: "mad-",
				}),
				f.length &&
					f.MonkeysanAccordion({
						easing: t.ANIMATIONEASING,
						speed: t.ANIMATIONDURATION,
						toggle: !0,
						cssPrefix: "mad-",
					});
			var p = e(".mad-alert-box");
			p.filter(".mad-alert-box--success").length &&
				MadAlertBox.init(p.filter(".mad-alert-box--success"), {
					duration: t.ANIMATIONDURATION,
					cssPrefix: "mad-",
					easing: t.ANIMATIONEASING,
					type: "success",
				}),
				p.filter(".mad-alert-box--warning").length &&
					MadAlertBox.init(p.filter(".mad-alert-box--warning"), {
						duration: t.ANIMATIONDURATION,
						cssPrefix: "mad-",
						easing: t.ANIMATIONEASING,
						type: "warning",
					}),
				p.filter(".mad-alert-box--info").length &&
					MadAlertBox.init(p.filter(".mad-alert-box--info"), {
						duration: t.ANIMATIONDURATION,
						cssPrefix: "mad-",
						easing: t.ANIMATIONEASING,
						type: "info",
					}),
				p.filter(".mad-alert-box--error").length &&
					MadAlertBox.init(p.filter(".mad-alert-box--error"), {
						duration: t.ANIMATIONDURATION,
						cssPrefix: "mad-",
						easing: t.ANIMATIONEASING,
						type: "error",
					}),
				e("[data-tooltip]").length &&
					e.fn.MonkeysanTooltip &&
					e("[data-tooltip]").MonkeysanTooltip({
						animationIn: "fadeInDown",
						animationOut: "fadeOutUp",
						tooltipPosition: "top",
						jQueryAnimationEasing: t.ANIMATIONEASING,
						jQueryAnimationDuration: t.ANIMATIONDURATION,
						skin: "mad",
					});
			var v = e(
				'[data-bg-image-src]:not([class*="mad-colorizer--scheme-"])'
			);
			v.length &&
				this.helpers.dynamicBgImage &&
				this.helpers.dynamicBgImage(v),
				e(".owl-carousel").length && this.helpers.owlAdaptive();
			var C = e(".mad-simple-slideshow");
			C.length &&
				e.fn.owlCarousel &&
				C.each(function (i, n) {
					var s = e(n),
						a = s.closest(
							".mad-section--stretched-content, .mad-section--stretched-content-no-px"
						);
					a.length
						? a.each(function (i, n) {
								e(n).on("stretched.mad.Section", function () {
									s.owlCarousel(
										t.helpers.owlSettings({
											margin: 1,
											animateOut: "fadeOut",
											loop: !0,
											autoplay: s.hasClass(
												"mad-simple-slideshow--autoplay"
											),
										})
									);
								});
						  })
						: s.owlCarousel(
								t.helpers.owlSettings({
									margin: 1,
									animateOut: "fadeOut",
									loop: !0,
									autoplay: s.hasClass(
										"mad-simple-slideshow--autoplay"
									),
								})
						  );
				}),
				this.helpers.gridOwl.extendConfigFor(".mad-sponsors", {
					responsive: {
						0: { items: 2 },
						480: { items: 3 },
						1200: { items: 6 },
						1300: { items: 6 },
					},
				}),
				this.helpers.gridOwl.extendConfigFor(
					".mad-testimonials .owl-carousel",
					{ autoplay: !0, loop: !0, autoHeight: !0 }
				),
				this.helpers.gridOwl.extendConfigFor(".owl-center", {
					startPosition: 1,
					center: !0,
					loop: !0,
					responsive: {
						0: { items: 1 },
						480: { items: 1 },
						992: { items: 1 },
						1024: { items: 3 },
						1300: { items: 2 },
					},
				}),
				this.helpers.gridOwl.extendConfigFor(".owl-carousel.no-loop", {
					loop: !1,
				}),
				this.helpers.gridOwl.extendConfigFor(
					".mad-instafeed.owl-carousel",
					{
						margin: 8,
						responsive: {
							0: { items: 1 },
							480: { items: 2 },
							992: { items: 2 },
							1024: { items: 3 },
							1300: { items: 4 },
						},
					}
				),
				this.helpers.gridOwl.extendConfigFor(".mad-owl-center", {
					center: !0,
					responsive: {
						380: { items: 1 },
						480: { items: 1 },
						1200: { items: 1 },
						1300: { items: 2 },
					},
				}),
				this.helpers.gridOwl.extendConfigFor(
					".mad-entities.owl-carousel.mad-grid--cols-2",
					{
						responsive: {
							380: { items: 1 },
							480: { items: 1 },
							1200: { items: 2 },
							1300: { items: 2 },
						},
					}
				),
				this.helpers.gridOwl.extendConfigFor(".mad-product-thumbs", {
					margin: 16,
					loop: !1,
					responsive: {
						380: { items: 2 },
						480: { items: 2 },
						768: { items: 3 },
						1024: { items: 4 },
						1200: { items: 4 },
						1300: { items: 4 },
					},
				}),
				e('[class*="mad-section--stretched-content"]').on(
					"stretched.mad.Section",
					function (e, i) {
						var n = i.find(".mad-grid.owl-carousel"),
							s = i.find(
								".mad-simple-slideshow-thumbs.owl-carousel"
							);
						n.length && t.helpers.gridOwl.add(n),
							s.length &&
								s.owlCarousel(
									t.helpers.owlSettings({
										responsive: {
											0: { items: 2 },
											380: { items: 3 },
											992: { items: 4 },
											1200: { items: 6 },
										},
										margin: 10,
										loop: !1,
									})
								);
					}
				);
			var w = e(".mad-simple-slideshow-thumbs.owl-carousel").filter(
				function (t, i) {
					return !e(i).closest(
						'[class*="mad-section--stretched-content"]'
					).length;
				}
			);
			w.length &&
				w.owlCarousel(
					t.helpers.owlSettings({
						responsive: {
							0: { items: 2 },
							380: { items: 3 },
							992: { items: 4 },
							1200: { items: 6 },
						},
						margin: 10,
						dots: !0,
						loop: !1,
					})
				),
				this.helpers.gridOwl.add(
					e(".mad-grid.owl-carousel").filter(function (t, i) {
						return !e(i).closest(
							'[class*="mad-section--stretched-content"]'
						).length;
					})
				),
				this.helpers.owlSync.init();
			var b,
				y = e(".mad-rating-field");
			y.length &&
				(b = y.find(".mad-rating")).length &&
				b.on("built.mad.Rating", function (e, t) {
					var i,
						n = t.closest(".mad-tabs");
					n.length && (i = n.data("tabs")) && i.updateContainer();
				}),
				this.helpers.rating &&
					this.helpers.rating(
						e(".mad-rating:not(.mad-rating--independent)"),
						{
							topLevelElements:
								'<i class="material-icons active">star</i>',
							bottomLevelElements:
								'<i class="material-icons">star_border</i>',
						}
					),
				this.helpers.rating &&
					this.helpers.rating(e(".mad-rating--independent"), {
						topLevelElements:
							'<i class="material-icons active">star</i>',
						bottomLevelElements:
							'<i class="material-icons">star_border</i>',
					}),
				this.helpers.ratingField &&
					this.helpers.ratingField(e(".mad-rating-field")),
				i.resolve();
		}),
		(t.afterOuterResourcesLoaded = function () {
			if (!this.ISLEGACYBROWSER) {
				var t = e(".mad-section");
				this.helpers.Colorizer &&
					this.helpers.Colorizer.init(
						e('[class*="mad-colorizer--scheme-"]')
					),
					this.modules.Section &&
						t.length &&
						this.modules.Section.init(t),
					this.helpers.Breadcrumb &&
						this.helpers.Breadcrumb.init(
							e(
								".mad-header--transparent + .mad-breadcrumb[data-bg-image-src]"
							)
						),
					this.helpers.fullScreenArea &&
						this.helpers.fullScreenArea.init({
							except: e(
								"#mad-header:not(.mad-header--transparent)"
							).add(e("#mad-footer")),
						});
				var i = e(".mad-tabs");
				if (i.length) {
					i.MonkeysanTabs({
						speed: this.ANIMATIONDURATION,
						easing: this.ANIMATIONEASING,
						cssPrefix: "mad-",
					}),
						e(".mad-tabs-nav .mad-tab-link").on(
							"click",
							function () {
								e(".owl-carousel").trigger(
									"refresh.owl.carousel"
								),
									e(".inner-container").css({
										height:
											e(
												".inner-container .mad-tab.mad-active"
											).height() + "px",
									});
							}
						);
					var n = e(".mad-tabs").data("tabs");
					e(".mad-iso-tabs .mad-tabs-nav .mad-tab-link").on(
						"click",
						function () {
							setTimeout(function () {
								n.updateContainer();
							}, 300);
						}
					);
				}
				var s = e(".tabs-section");
				s.length &&
					s.tabs({
						active: 0,
						beforeActivate: function (e, t) {
							t.newTab.find("li a").attr("href");
						},
						hide: { effect: "fadeOut", duration: 450 },
						show: { effect: "fadeIn", duration: 450 },
						updateHash: !1,
					}),
					this.modules.preloader && this.modules.preloader();
				var a = e(".mad-colorizer--parallax .mad-colorizer-bg-image");
				a.length && a.parallax("50%", 0.4);
			}
		}),
		(t.modules.backToTop = function (i) {
			var s = {
				init: function (t) {
					t && (this.config = e.extend(this.config, t)),
						(this.btn = e("<button></button>", {
							class:
								this.config.cssPrefix +
								"back-to-top animated stealthy",
							html: '<span class="icon"></span>',
						})),
						this.bindEvents(),
						n.append(this.btn);
				},
				config: {
					breakpoint: 700,
					showClass: "zoomIn",
					hideClass: "zoomOut",
					easing: "linear",
					speed: 500,
					cssPrefix: "",
				},
				bindEvents: function () {
					var i = e("html, body"),
						n = this;
					this.btn.on("click", function (e) {
						i.stop().animate(
							{ scrollTop: 0 },
							{
								easing: n.config.easing,
								duration: n.config.speed,
							}
						);
					}),
						this.btn.on(t.ANIMATIONEND, function (t) {
							t.preventDefault();
							var i = e(this);
							i.hasClass(n.config.hideClass) &&
								i
									.addClass("stealthy")
									.removeClass(
										n.config.hideClass +
											" " +
											n.config.cssPrefix +
											"inview"
									);
						}),
						e(window).on(
							"scroll.backtotop",
							{ self: this },
							this.toggleBtn
						);
				},
				toggleBtn: function (i) {
					var n = e(this),
						s = i.data.self;
					n.scrollTop() > s.config.breakpoint &&
					!s.btn.hasClass(s.config.cssPrefix + "inview")
						? (s.btn
								.addClass(s.config.cssPrefix + "inview")
								.removeClass("stealthy"),
						  t.ANIMATIONSUPPORTED &&
								s.btn.addClass(s.config.showClass))
						: n.scrollTop() < s.config.breakpoint &&
						  s.btn.hasClass(s.config.cssPrefix + "inview") &&
						  (s.btn.removeClass(s.config.cssPrefix + "inview"),
						  t.ANIMATIONSUPPORTED
								? s.btn
										.removeClass(s.config.showClass)
										.addClass(s.config.hideClass)
								: s.btn.addClass("stealthy"));
				},
			};
			return s.init(i), this;
		}),
		(t.modules.dropdown = {}),
		(t.modules.dropdown.config = {
			uncloseable: ".mad-dropdown, .select2-container--mad",
			cssPrefix: "mad-",
			availableError: 30,
			rtl: t.RTL,
			classMap: {
				active: "dropdown--opened",
				container: "dropdown",
				title: "dropdown-title",
				element: "dropdown-element",
				leftPlaced: "dropdown-element--x-left",
				rightPlaced: "dropdown-element--x-right",
				topPlaced: "dropdown-element--y-top",
			},
		}),
		(t.modules.dropdown.init = function (t) {
			this._initialized ||
				(e.isPlainObject(t) && e.extend(!0, this.config, t),
				Object.defineProperties(this, {
					activeClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.active
							);
						},
					},
					containerClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.container
							);
						},
					},
					titleClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.title
							);
						},
					},
					elementClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.element
							);
						},
					},
					rightPlacedClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.rightPlaced
							);
						},
					},
					leftPlacedClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.leftPlaced
							);
						},
					},
					topPlacedClass: {
						get: function () {
							return (
								this.config.cssPrefix +
								this.config.classMap.topPlaced
							);
						},
					},
					$dropdowns: {
						get: function () {
							return e("." + this.containerClass);
						},
					},
				}),
				this._bindEvents());
		}),
		(t.modules.dropdown._bindEvents = function () {
			var t = this;
			s
				.off("click.MadDropdown")
				.on("click.MadDropdown", function (i) {
					e(i.target).closest(t.config.uncloseable).length ||
						t.close(t.$dropdowns);
				})
				.on("keydown.MadDropdown", function (e) {
					e.keyCode && 27 == e.keyCode && t.close(t.$dropdowns);
				}),
				n
					.off("click.MadDropdown")
					.on("click.MadDropdown", "." + t.titleClass, function (i) {
						var n = e(this).closest("." + t.containerClass),
							s = t.$dropdowns.not(n);
						n.length && (t.toggle(n), i.preventDefault()),
							t.close(s);
					}),
				(this._initialized = !0);
		}),
		(t.modules.dropdown.close = function (t) {
			e.isjQuery(t, !0) &&
				t
					.removeClass(this.activeClass)
					.find("." + this.elementClass)
					.attr("aria-hidden", "true")
					.end()
					.find("." + this.titleClass)
					.attr("aria-expanded", "false");
		}),
		(t.modules.dropdown.open = function (t) {
			e.isjQuery(t, !0) &&
				(this.fixPosition(t),
				t
					.addClass(this.activeClass)
					.find("." + this.elementClass)
					.attr("aria-hidden", "false")
					.end()
					.find("." + this.titleClass)
					.attr("aria-expanded", "true"));
		}),
		(t.modules.dropdown.fixPosition = function (t) {
			var i = this,
				n = e(window);
			if (e.isjQuery(t, !0))
				return t.each(function (t, s) {
					var a,
						o = e(s).find("." + i.elementClass);
					o
						.removeClass(i.leftPlacedClass)
						.removeClass(i.rightPlacedClass)
						.removeClass(i.topPlacedClass),
						(a = o.offset()).left - i.config.availableError < 0
							? o.addClass(i.leftPlacedClass)
							: a.left +
									o.outerWidth() +
									i.config.availableError >
									n.width() && o.addClass(i.rightPlacedClass),
						a.top + o.outerHeight() + i.config.availableError >
							n.scrollTop() + n.height() &&
							o.addClass(i.topPlacedClass);
				});
		}),
		(t.modules.dropdown.toggle = function (t) {
			if (e.isjQuery(t, !0)) {
				var i = this;
				return t.each(function (t, n) {
					var s = e(n);
					s.hasClass(i.activeClass) ? i.close(s) : i.open(s);
				});
			}
		}),
		(t.modules.arcticModals = {
			_config: {
				type: "html",
				closeOnOverlayClick: !0,
				overlay: { css: { backgroundColor: "#000000" } },
				clickableElements: null,
			},
			_collection: e(),
			init: function (t, i) {
				t &&
					t.length &&
					((i = e.isPlainObject(i)
						? e.extend(!0, {}, this._config, i)
						: this._config),
					(i = this._prepareCallbacks(i)) &&
						i.clickableElements &&
						n.on(
							"click.MadArcticModals",
							".arcticmodal-container",
							function (t) {
								e(t.target).closest(i.clickableElements)
									.length || e.arcticmodal("close");
							}
						),
					t.on("click.MadArcticModals", function (t) {
						var n = e(this);
						if ("ajax" == n.data("arctic-modal-type")) {
							if (!n.data("arctic-modal-ajax-action")) return;
							e.arcticmodal(
								e.extend(!0, {}, i, {
									type: "ajax",
									url: MadAJAXData.url,
									ajax: {
										cache: !1,
										dataType: "html",
										data: {
											action: n.data(
												"arctic-modal-ajax-action"
											),
											data: n.data(
												"arctic-modal-ajax-data"
											),
											AJAX_token: MadAJAXData.AJAX_token,
										},
										success: function (e, t, i) {
											e.body.html(i);
										},
									},
								})
							);
						} else e(n.data("arctic-modal")).arcticmodal(i);
						t.preventDefault();
					}));
			},
			_prepareCallbacks: function (e) {
				var t = e.beforeOpen || function () {},
					i = e.beforeClose || function () {},
					s = (e.afterOpen, e.afterClose || function () {});
				return (
					(e.beforeOpen = function () {
						t.apply(this, Array.prototype.slice(arguments, 0));
					}),
					(e.beforeClose = function (e) {
						i.apply(this, Array.prototype.slice(arguments, 0));
					}),
					(e.afterClose = function (e) {
						n.css("overflow", ""),
							s.apply(this, Array.prototype.slice(arguments, 0));
					}),
					e
				);
			},
		}),
		(t.modules.alertMessage = function (t) {
			if ("Handlebars" in window) {
				var i = {
					target: n.children().last(),
					type: "info",
					timeout: 4e3,
				};
				i = t && e.isPlainObject(t) ? e.extend(!0, {}, i, t) : i;
				var s = e(
					Handlebars.compile(
						'<div class="mad-alert-box mad-alert-box--{{type}}" style="display: none;">                    <div class="mad-alert-box-inner">                        {{message}}                    </div>                </div>'
					)(i)
				);
				s.data(
					"timeOut",
					setTimeout(function () {
						s.stop().slideUp({
							duration: 350,
							easing: "linear",
							complete: function () {
								e(this).remove();
							},
						});
					}, i.timeout)
				)
					.insertAfter(i.target)
					.stop()
					.slideDown({ duration: 350, easing: "linear" });
			}
		}),
		(t.modules.Section = {}),
		(t.modules.Section._$collection = e()),
		(t.modules.Section.config = {
			cssPrefix: "mad-",
			resizeDelay: 10,
			boddyPaddings: !1,
			classMap: {
				loading: "section--loading",
				stretched: "section--stretched",
				stretchedContent: "section--stretched-content",
				stretchedContentNoPadding: "section--stretched-content-no-px",
				bgColorElementClass: "colorizer-bg-color",
				bgImageElementClass: "colorizer-bg-image",
			},
		}),
		Object.defineProperties(t.modules.Section, {
			bgColorElementClass: {
				get: function () {
					return (
						this.config.cssPrefix +
						this.config.classMap.bgColorElementClass
					);
				},
			},
			bgImageElementClass: {
				get: function () {
					return (
						this.config.cssPrefix +
						this.config.classMap.bgImageElementClass
					);
				},
			},
			stretchedClass: {
				get: function () {
					return (
						this.config.cssPrefix + this.config.classMap.stretched
					);
				},
			},
			stretchedContentClass: {
				get: function () {
					return (
						this.config.cssPrefix +
						this.config.classMap.stretchedContent
					);
				},
			},
			stretchedContentNoPaddingClass: {
				get: function () {
					return (
						this.config.cssPrefix +
						this.config.classMap.stretchedContentNoPadding
					);
				},
			},
			loadingClass: {
				get: function () {
					return this.config.cssPrefix + this.config.classMap.loading;
				},
			},
		}),
		(t.modules.Section.changeConfig = function (t) {
			return e.extend(!0, this.config, t);
		}),
		(t.modules.Section.init = function (t) {
			var i = this;
			if (e.isjQuery(t, !0))
				return (
					this._bindedGlobalEvents || this._bindGlobalEvents(),
					t.each(function (t, n) {
						var s = e(n);
						i._$collection.filter(s).length ||
							(i.build(s),
							(i._$collection = i._$collection.add(s)));
					})
				);
		}),
		(t.modules.Section._bindGlobalEvents = function () {
			var t = this;
			e(window).on("resize.App.modules.Section", function () {
				t._resizeTimeOutId && clearTimeout(t._resizeTimeOutId),
					(t._resizeTimeOutId = setTimeout(function () {
						t.rebuild();
					}, t.config.resizeDelay));
			});
		}),
		(t.modules.Section.rebuild = function () {
			var t = this;
			return this._$collection.each(function (i, n) {
				var s = e(n);
				t.reset(s).build(s);
			});
		}),
		(t.modules.Section.reset = function (t) {
			if (e.isjQuery(t, !0))
				return t.css({ "margin-left": "", "margin-right": "" }), this;
		}),
		(t.modules.Section.build = function (t) {
			if (e.isjQuery(t, !0))
				return (
					t.hasClass(this.stretchedClass)
						? this.stretch(t)
						: (t.hasClass(this.stretchedContentClass) ||
								t.hasClass(
									this.stretchedContentNoPaddingClass
								)) &&
						  this.stretchContent(t),
					this
				);
		}),
		(t.modules.Section.getDocumentGeometry = function () {
			return {
				"padding-left": parseInt(n.css("padding-left"), 10),
				"padding-right": parseInt(n.css("padding-right"), 10),
			};
		}),
		(t.modules.Section.stretch = function (t) {
			var i, n, s;
			if (
				e.isjQuery(t, !0) &&
				(i = t.find(
					"." +
						this.bgColorElementClass +
						", ." +
						this.bgImageElementClass
				)).length
			)
				return (
					(n = t.offset().left),
					(s = this.getDocumentGeometry()),
					n > 0 &&
						i.css({
							left: (n - s["padding-left"]) / -1,
							right: (n - s["padding-right"]) / -1,
						}),
					t
						.removeClass(this.loadingClass)
						.trigger("stretched.mad.Section", [t]),
					t
				);
		}),
		(t.modules.Section.stretchContent = function (t) {
			var i, n;
			if (e.isjQuery(t) && t.length)
				return (
					(i = t.offset().left),
					(n = this.getDocumentGeometry()),
					i > 0 &&
						t.css({
							"margin-left": (i - n["padding-left"]) / -1,
							"margin-right": (i - n["padding-right"]) / -1,
						}),
					t
						.removeClass(this.loadingClass)
						.trigger("stretched.mad.Section", [t]),
					t
				);
		}),
		(t.helpers.Colorizer = {}),
		(t.helpers.Colorizer.config = {
			cssPrefix: "mad-",
			classMap: {
				bgColorElement: "colorizer-bg-color",
				bgImageElement: "colorizer-bg-image",
				parallax: "colorizer--parallax",
			},
			afterInit: function () {},
		}),
		Object.defineProperties(t.helpers.Colorizer, {
			bgColorElementClass: {
				get: function () {
					return (
						this.config.cssPrefix +
						this.config.classMap.bgColorElement
					);
				},
			},
			bgImageElementClass: {
				get: function () {
					return (
						this.config.cssPrefix +
						this.config.classMap.bgImageElement
					);
				},
			},
			parallaxClass: {
				get: function () {
					return (
						this.config.cssPrefix + this.config.classMap.parallax
					);
				},
			},
		}),
		(t.helpers.Colorizer.init = function (t, i) {
			var n = this;
			return e.isjQuery(t, !0)
				? ((this.config = e.extend(!0, {}, this.config, i)),
				  t.each(function (t, i) {
						var s = e(i);
						n.hasBGColorElement(s) || n.appendBGColorElement(s),
							!n.hasBGImageElement(s) &&
								s.data("bg-image-src") &&
								n.appendBGImageElement(s);
				  }),
				  this.config.afterInit.call(this),
				  t)
				: t;
		}),
		(t.helpers.Colorizer.hasBGColorElement = function (e) {
			return e.children("." + this.bgColorElementClass).length;
		}),
		(t.helpers.Colorizer.hasBGImageElement = function (e) {
			return e.children("." + this.bgImageElementClass).length;
		}),
		(t.helpers.Colorizer.appendBGColorElement = function (t) {
			var i = e("<div></div>", { class: this.bgColorElementClass });
			return t.prepend(i);
		}),
		(t.helpers.Colorizer.appendBGImageElement = function (t) {
			var i = t.data("bg-image-src"),
				n = e("<div></div>", { class: this.bgImageElementClass });
			return (
				n.css("background-image", 'url("' + i + '")'), t.prepend(n), t
			);
		}),
		(t.helpers.showCriticalFullScreenMessage = function (t) {
			var i =
				'<div class="%cssPrefix%fullscreen-message %cssClass% %cssPrefix%aligner">                            <div class="%cssPrefix%aligner-outer">                                <div class="%cssPrefix%aligner-inner">                                    <div class="%cssPrefix%fullscreen-message-before">%before%</div>                                    <div class="%cssPrefix%fullscreen-message-content">%content%</div>                                    <div class="%cssPrefix%fullscreen-message-after">%after%</div>                                </div>                            </div>                        </div>';
			for (var s in (t = e.extend(
				{
					after: "",
					before: "",
					content: "",
					cssPrefix: "mad-",
					cssClass: "",
				},
				t
			)))
				i = i.replace(new RegExp("%" + s + "%", "g"), t[s]);
			n.html("")
				.addClass(t.cssPrefix + "body--has-critical-fullscreen-message")
				.append(i);
		}),
		(t.helpers.dynamicBgImage = function (t) {
			if ((t = e.isjQuery(t) ? t : e("[data-bg-image-src]")).length)
				return t.each(function (t, i) {
					var n = e(i);
					n.data("bg-image-src") &&
						n.css(
							"background-image",
							'url("' + n.data("bg-image-src") + '")'
						);
				});
		}),
		(t.helpers.toggledFields = function () {
			n.off("click.MadToggledFields").on(
				"click.MadToggledFields",
				".mad-toggled-fields-invoker",
				function (i) {
					var n = e(this),
						s = n.siblings(".mad-toggled-fields");
					n.toggleClass("mad-toggled-fields-invoker--opened"),
						s.length &&
							s.stop().slideToggle({
								duration: t.ANIMATIONDURATION,
								easing: t.ANIMATIONEASING,
							});
				}
			);
		}),
		(t.helpers.calendarWidget = function () {
			var i,
				n,
				s,
				a = e(".calendar_wrap");
			a.length &&
				!a.hasClass("mad-calendar-rendered") &&
				(i = a.find("caption")).length &&
				((n = a.find("#prev > a")),
				(s = a.find("#next > a")),
				n.length &&
					e("<a></a>", {
						class: "calendar-caption-prev mad-ln--independent",
						html: t.RTL
							? '<i class="icon licon-arrow-right"></i>'
							: '<i class="icon licon-arrow-left"></i>',
						href: n.attr("href"),
					}).appendTo(i),
				s.length &&
					e("<a></a>", {
						class: "calendar-caption-next mad-ln--independent",
						html: t.RTL
							? '<i class="icon licon-arrow-left"></i>'
							: '<i class="icon licon-arrow-right"></i>',
						href: s.attr("href"),
					}).appendTo(i),
				a.addClass("mad-calendar-rendered"));
		}),
		(t.baseOwlSettings = {
			items: 1,
			margin: 32,
			nav: !0,
			loop: !0,
			rtl: t.RTL,
			navText:
				(t.RTL,
				[
					'<img class="svg" src="legasy_icons_svg/arrow_left.svg" alt="">',
					'<img class="svg" src="legasy_icons_svg/arrow_right.svg" alt="">',
				]),
			dots: !0,
			autoplayHoverPause: !0,
			smartSpeed: t.ANIMATIONDURATION,
			fluidSpeed: t.ANIMATIONDURATION,
			autoplaySpeed: t.ANIMATIONDURATION,
			navSpeed: t.ANIMATIONDURATION,
			dotsSpeed: t.ANIMATIONDURATION,
			dragEndSpeed: t.ANIMATIONDURATION,
		}),
		(t.helpers.owlAdaptive = function (t) {
			(t = t || e(".owl-carousel")).length;
		}),
		(t.helpers.owlContainerHeight = function (i, n) {
			i.hasClass("owl-carousel--vadaptive") ||
				setTimeout(function () {
					var s = 0,
						a = i.find(".owl-item"),
						o = a.filter(".active").children();
					a.children().css("height", "auto"),
						o.each(function (t, i) {
							var n = e(i).outerHeight();
							n > s && (s = n);
						}),
						i
							.find(".owl-stage-outer")
							.stop()
							.animate(
								{ height: s },
								{
									duration: 150,
									complete: function () {
										n &&
											t.helpers.owlUpdateIsotopeParent(
												e(this)
											);
									},
								}
							);
				}, 1);
		}),
		(t.helpers.owlUpdateIsotopeParent = function (e) {
			var t = e.closest(".mad-grid--isotope");
			t.length && t.isotope("layout");
		}),
		(t.helpers.owlNav = function (e) {
			setTimeout(function () {
				var t = e.data("owl.carousel").settings;
				if (!t.autoplay && !t.loop) {
					var i = e.find(".owl-prev"),
						n = e.find(".owl-next");
					e.find(".owl-item").first().hasClass("active")
						? i.addClass("mad-disabled")
						: i.removeClass("mad-disabled"),
						e.find(".owl-item").last().hasClass("active")
							? n.addClass("mad-disabled")
							: n.removeClass("mad-disabled");
				}
			}, 100);
		}),
		(t.helpers.owlSettings = function (i) {
			return e.extend(!0, {}, t.baseOwlSettings, i);
		}),
		(t.helpers.owlSync = {
			init: function () {
				(this.collection = e(".owl-carousel[data-sync]")),
					this.collection.length && this.prepare();
			},
			prepare: function () {
				this.collection.each(function (t, i) {
					var n = e(i),
						s = e(n.data("sync"));
					s.on("changed.owl.carousel", function (e) {
						var t = e.item.index;
						s.data("afterClicked") ||
							n.trigger("to.owl.carousel", [t, 350, !0]),
							s.data("afterClicked", !1);
					}),
						n.on("prev.owl.carousel", function () {
							s.trigger("prev.owl.carousel");
						}),
						n.on("next.owl.carousel", function () {
							s.trigger("next.owl.carousel");
						}),
						n.on("click.owlSync", ".owl-item", function (t) {
							t.preventDefault();
							var i = e(this).index();
							s.data("afterClicked", !0),
								s.trigger("to.owl.carousel", [i, 350, !0]);
						});
				});
			},
		}),
		(a.config = {
			cssPrefix: "mad-",
			bottomLevelElements: '<i class="icon licon-star"></i>',
			topLevelElements: '<i class="icon licon-star"></i>',
			estimate: 5,
			rtl: t.RTL,
			classMap: {
				bottomLevelElement: "rating-bottom-level",
				topLevelElement: "rating-top-level",
			},
		}),
		(a.prototype.init = function () {
			return this._buildMarkup(), this;
		}),
		(a.prototype._buildMarkup = function () {
			if (!this._markupBuilded) {
				if (
					(this.$element.css({
						position: "relative",
						display: "inline-block",
					}),
					this.config.topLevelElements)
				) {
					this.$topLevelEl = e("<div></div>", {
						class: this.topLevelElementClass,
						style: "position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 2; white-space: nowrap; overflow: hidden;",
					});
					for (var t = 0; t < 5; t++)
						this.$topLevelEl.append(this.config.topLevelElements);
					this.$element.append(this.$topLevelEl);
				}
				if (this.config.bottomLevelElements) {
					this.$bottomLevelEl = e("<div></div>", {
						class: this.bottomLevelElementClass,
						style: "position: relative; z-index: 1;",
					});
					for (t = 0; t < 5; t++)
						this.$bottomLevelEl.append(
							this.config.bottomLevelElements
						);
					this.$element.append(this.$bottomLevelEl);
				}
				this.update(this.config.estimate),
					(this._markupBuilded = !0),
					this.$element.trigger("built.mad.Rating", [this.$element]);
			}
		}),
		(a.prototype.update = function (e) {
			if (this.config.topLevelElements)
				this.$topLevelEl.css("width", (e / 5) * 100 + "%");
			else if (this.config.bottomLevelElements) {
				this.$bottomLevelEl.html("");
				for (var t = 0; t < Math.round(e); t++)
					this.$bottomLevelEl.append(this.config.bottomLevelElements);
			}
		}),
		(t.helpers.rating = function (t, i) {
			return (
				(i = i || {}),
				e.isjQuery(t) && t.length
					? t.each(function (t, n) {
							var s = e(n),
								o = e.extend(!0, {}, i, {
									estimate: s.data("estimate"),
								});
							s.data("Rating") ||
								s.data("Rating", new a(s, o).init());
					  })
					: t
			);
		}),
		(t.helpers.ratingField = function (i) {
			e.isjQuery(i) &&
				i.on("click.MadRatingField", ".icon", function (i) {
					var n = e(this),
						s = n.closest("[data-estimate]"),
						a = n.index() + 1,
						o = s.data("Rating"),
						l = s.siblings('input[type="hidden"]');
					o && (o.update(t.RTL ? 6 - a : a), l.length && l.val(a)),
						i.preventDefault(),
						i.stopPropagation();
				});
		}),
		(t.helpers.gridOwl = {
			_commonLayoutConfig: {
				"columns-4": {
					responsive: {
						0: { items: 1 },
						768: { items: 2 },
						1200: { items: 4 },
					},
				},
				"columns-4-sidebar": {
					responsive: {
						0: { items: 1 },
						992: { items: 2 },
						1200: { items: 3 },
					},
				},
				"columns-3": {
					responsive: {
						0: { items: 1 },
						768: { items: 2 },
						1200: { items: 3 },
					},
				},
				"columns-3-sidebar": {
					responsive: {
						0: { items: 1 },
						992: { items: 2 },
						1200: { items: 3 },
					},
				},
				"columns-2": {
					responsive: { 0: { items: 1 }, 768: { items: 2 } },
				},
				"columns-2-sidebar": {
					responsive: { 0: { items: 1 }, 992: { items: 2 } },
				},
			},
			_$collection: e(),
			_individualConfigs: {},
		}),
		(t.helpers.gridOwl.init = function (t) {
			var i = this;
			return (
				(t = e.isjQuery(t) ? t : e(".mad-grid.owl-carousel")).each(
					function (t, n) {
						var s = e(n);
						i._$collection.filter(s).length ||
							(i._$collection = i._$collection.add(s));
					}
				),
				this.update(),
				t
			);
		}),
		(t.helpers.gridOwl.extendConfigFor = function (e, t) {
			return (this._individualConfigs[e] = t), this;
		}),
		(t.helpers.gridOwl.add = function (t) {
			return (
				e.isjQuery(t) &&
					!this._$collection.filter(t).length &&
					((this._$collection = this._$collection.add(t)),
					this.update()),
				this
			);
		}),
		(t.helpers.gridOwl.update = function () {
			var i = this;
			return (
				this._$collection.each(function (n, s) {
					var a,
						o,
						l = e(s),
						r = {};
					if (!l.data("owl.carousel")) {
						for (var d in ((a = i._getColumnsCount(l)) > 1 &&
							((o = l.closest(".mad-has-sidebar").length
								? "columns-" + a + "-sidebar"
								: "columns-" + a),
							e.extend(r, i._commonLayoutConfig[o])),
						i._individualConfigs))
							l.closest(d).length &&
								(e.extend(r, i._individualConfigs[d]),
								l.closest(".mad-has-sidebar").length &&
									(r.responsive = r.responsiveWithSidebar));
						l.owlCarousel(t.helpers.owlSettings(r));
					}
				}),
				this
			);
		}),
		(t.helpers.gridOwl._getColumnsCount = function (e) {
			return e.hasClass("mad-grid--cols-4")
				? 4
				: e.hasClass("mad-grid--cols-3")
				? 3
				: e.hasClass("mad-grid--cols-2")
				? 2
				: e.hasClass("mad-grid--cols-5")
				? 5
				: 1;
		}),
		(t.modules.bgMove = function () {
			var t = 0,
				i = 0,
				n = 0,
				s = 0,
				a = 1 / 30;
			e(window).on("mousemove click", function (n) {
				var s = Math.max(
						-100,
						Math.min(100, e(window).width() / 2 - n.clientX)
					),
					a = Math.max(
						-100,
						Math.min(100, e(window).height() / 2 - n.clientY)
					);
				(t = (20 * s) / 100), (i = (10 * a) / 100);
			}),
				(function o() {
					var l =
							"translate(" +
							(n += (t - n) * a) +
							"px, " +
							(s += (i - s) * a) +
							"px) scale(1)",
						r = "translate(" + -n + "px, " + -s + "px) scale(1)";
					e(".bg-move").css({
						"-webit-transform": l,
						"-moz-transform": l,
						transform: l,
					}),
						e(".bg-move2").css({
							"-webit-transform": r,
							"-moz-transform": r,
							transform: r,
						}),
						window.requestAnimationFrame(o);
				})();
		}),
		e("#googleMap").length)
	) {
		function e() {
			if (null !== (e = document.getElementById("googleMap")))
				var e = new google.maps.Map(
					document.getElementById("googleMap"),
					{ center: { lat: -1.28312, lng: 36.80699 }, zoom: 14 }
				);
			var t = window
					.getComputedStyle(document.body)
					.getPropertyValue("--color-primary"),
				i = new google.maps.Marker({
					position: { lat: -1.28312, lng: 36.80699 },
					map: e,
					icon: {
						path: "M52 0.0078125C60.8617 0.0103157 69.5757 2.16006 77.3156 6.25311C85.0554 10.3462 91.5643 16.2468 96.225 23.3953C100.886 30.5438 103.543 38.7031 103.946 47.0992C104.349 55.4953 102.484 63.8497 98.5266 71.3701C91.8308 84.0571 57.8924 104.016 51.9178 128.008C42.2216 104.721 12.1692 84.0571 5.4734 71.3701C1.5165 63.8497 -0.349035 55.4953 0.0537717 47.0992C0.456578 38.7031 3.11437 30.5438 7.77501 23.3953C12.4357 16.2468 18.9446 10.3462 26.6845 6.25311C34.4243 2.16006 43.1383 0.0103157 52 0.0078125ZM66.3235 28.4644C62.0838 25.7775 57.0991 24.3434 52 24.3434C45.1623 24.3434 38.6046 26.9196 33.7696 31.5053C28.9346 36.0911 26.2183 42.3107 26.2183 48.7959C26.2183 53.6321 27.7304 58.3598 30.5633 62.381C33.3962 66.4022 37.4228 69.5363 42.1338 71.387C46.8448 73.2378 52.0286 73.722 57.0298 72.7785C62.0309 71.835 66.6248 69.5061 70.2304 66.0864C73.8361 62.6667 76.2915 58.3096 77.2863 53.5663C78.2811 48.823 77.7705 43.9064 75.8192 39.4383C73.8678 34.9702 70.5633 31.1512 66.3235 28.4644Z",
						fillColor: t,
						strokeWeight: 0,
						fillOpacity: 1,
					},
				});
			i.setMap(e),
				google.maps.event.addListener(i, "click", function () {
					e.setZoom(9), e.setCenter(i.getPosition());
				});
		}
		google.maps.event.addDomListener(window, "load", e);
	}
	if (e("#googleMap2").length) {
		function e() {
			var e = {
				center: { lat: -1.28312, lng: 36.80699 },
				zoom: 14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			if (null !== (t = document.getElementById("googleMap2")))
				var t = new google.maps.Map(
					document.getElementById("googleMap2"),
					e
				);
			var i = window
					.getComputedStyle(document.body)
					.getPropertyValue("--color-primary"),
				n = new google.maps.Marker({
					position: { lat: 51.509954, lng: -0.129811 },
					map: t,
					icon: {
						path: "M52 0.0078125C60.8617 0.0103157 69.5757 2.16006 77.3156 6.25311C85.0554 10.3462 91.5643 16.2468 96.225 23.3953C100.886 30.5438 103.543 38.7031 103.946 47.0992C104.349 55.4953 102.484 63.8497 98.5266 71.3701C91.8308 84.0571 57.8924 104.016 51.9178 128.008C42.2216 104.721 12.1692 84.0571 5.4734 71.3701C1.5165 63.8497 -0.349035 55.4953 0.0537717 47.0992C0.456578 38.7031 3.11437 30.5438 7.77501 23.3953C12.4357 16.2468 18.9446 10.3462 26.6845 6.25311C34.4243 2.16006 43.1383 0.0103157 52 0.0078125ZM66.3235 28.4644C62.0838 25.7775 57.0991 24.3434 52 24.3434C45.1623 24.3434 38.6046 26.9196 33.7696 31.5053C28.9346 36.0911 26.2183 42.3107 26.2183 48.7959C26.2183 53.6321 27.7304 58.3598 30.5633 62.381C33.3962 66.4022 37.4228 69.5363 42.1338 71.387C46.8448 73.2378 52.0286 73.722 57.0298 72.7785C62.0309 71.835 66.6248 69.5061 70.2304 66.0864C73.8361 62.6667 76.2915 58.3096 77.2863 53.5663C78.2811 48.823 77.7705 43.9064 75.8192 39.4383C73.8678 34.9702 70.5633 31.1512 66.3235 28.4644Z",
						fillColor: i,
						strokeWeight: 0,
						fillOpacity: 1,
					},
				});
			n.setMap(t),
				google.maps.event.addListener(n, "click", function () {
					t.setZoom(9), t.setCenter(n.getPosition());
				});
		}
		google.maps.event.addDomListener(window, "load", e);
	}
	if (
		((t.modules.closeBtn = function () {
			return (
				e("body").on(
					"click.globalclose",
					".mad-close-item:not(.shopping-cart-full .mad-close-item)",
					function (t) {
						t.preventDefault(),
							e(this)
								.parent()
								.stop()
								.animate({ opacity: 0 }, function () {
									e(this)
										.stop()
										.slideUp(function () {
											e(this).remove();
										});
								});
					}
				),
				e(".shopping-cart-full").on(
					"click.removeProduct",
					".mad-close-item",
					function (t) {
						t.preventDefault(),
							e(this)
								.closest("tr")
								.stop()
								.fadeOut(function () {
									e(this).remove();
								});
					}
				),
				this
			);
		}),
		(t.modules.hiddenSections = function (t) {
			var i = e(".hidden-section");
			if (i.length)
				return (
					i.each(function (t, i) {
						e(i).find(".content").hide();
					}),
					i.on("click.hidden", ".invoker", function (i) {
						i.preventDefault(),
							e(this)
								.closest(".hidden-section")
								.find(".content")
								.slideToggle({
									duration: 500,
									easing: "easeOutQuint",
									complete: t || function () {},
								});
					}),
					i
				);
		}),
		e.extend({
			isjQuery: function (t, i) {
				return (
					null != t &&
					(void 0 === i
						? t instanceof jQuery
						: e.isjQuery(t) && t.length)
				);
			},
		}),
		e.fn.extend({
			jQueryImagesLoaded: function () {
				var t = this.find('img[src!=""]');
				if (!t.length) return e.Deferred().resolve().promise();
				var i = [];
				return (
					t.each(function () {
						var t = e.Deferred();
						i.push(t);
						var n = new Image();
						(n.onload = function () {
							t.resolve();
						}),
							(n.onerror = function () {
								t.resolve();
							}),
							(n.src = this.src);
					}),
					e.when.apply(e, i)
				);
			},
		}),
		s.on("beforeClose", function (t) {
			e(t.target).hasClass("mad-modal") && t.stopImmediatePropagation();
		}),
		s.ready(function () {
			t.afterDOMReady();
		}),
		e(window).on("load", function () {
			if (
				(i.done(function () {
					t.afterOuterResourcesLoaded();
				}),
				e("#mad-nav-canvas").length || e(".mad-sidebar-element").length)
			) {
				e(".mad-vr-nav > ul > li.menu-item-has-children > a").on(
					"click",
					function (t) {
						t.preventDefault(),
							e(this).next(".sub-menu").slideToggle(),
							e(this)
								.parent()
								.siblings()
								.children(".sub-menu")
								.slideUp();
					}
				),
					e("#mad-nav-btn").on("click", function (t) {
						t.preventDefault(),
							e(".header-3").length &&
								e("html").toggleClass("with-src-menu"),
							e(this).toggleClass("mad-opened"),
							e("#mad-nav-canvas").toggleClass("mad-nav-opened"),
							e(".mad-sidebar-element").toggleClass("mad-opened");
					}),
					e("#mad-sidebar-btn").on("click", function (t) {
						t.preventDefault(),
							e(this).toggleClass("mad-opened"),
							e(".mad-sidebar-element").toggleClass("mad-opened");
					}),
					e(".mad-sidebar-element").on("click", function (t) {
						t.target.classList.contains("mad-opened") &&
							(e(".mad-sidebar-element").removeClass(
								"mad-opened"
							),
							e(".mad-nav-btn").removeClass("mad-opened"));
					}),
					e(".mad-nav-canvas").on("click", function (t) {
						t.target.hasAttribute("href") ||
							(e(".mad-nav-canvas").removeClass("mad-nav-opened"),
							e(".mad-nav-btn").removeClass("mad-opened"),
							e("html").removeClass("with-src-menu"));
					});
				const t = e(
					".mad-nav-canvas, .mad-nav-btn, .mad-sidebar-element"
				);
				e(document).mouseup((i) => {
					t.is(i.target) ||
						0 !== t.has(i.target).length ||
						(e(".mad-nav-canvas").removeClass("mad-nav-opened"),
						e(".mad-nav-btn").removeClass("mad-opened"),
						e(".mad-sidebar-element").removeClass("mad-opened"));
				});
			}
			if (e("[data-appear-animation]").length) {
				function t() {
					e("[data-appear-animation]").each(function () {
						var t = e(this);
						t.addClass("appear-animation"),
							e(window).width() > 1200
								? t.appear(
										function () {
											var e = t.attr(
												"data-appear-animation-delay"
											)
												? t.attr(
														"data-appear-animation-delay"
												  )
												: 1;
											e > 1 &&
												t.css(
													"animation-delay",
													e + "ms"
												),
												t.addClass(
													t.attr(
														"data-appear-animation"
													)
												),
												setTimeout(function () {
													t.addClass(
														"appear-animation-visible"
													);
												}, e);
										},
										{ accX: 0, accY: -150 }
								  )
								: t.addClass("appear-animation-visible");
					});
				}
				t(), e(window).on("resize", t);
			}
			e(".mad-img-move").length &&
				e(window).scroll(function () {
					var t = e(window).scrollTop(),
						i = "translateY(" + -t / 40 + "px)",
						n = "translateY(" + t / 40 + "px)";
					e(".mad-img-move").css({ transform: i }),
						e(".mad-img-move-down").css({ transform: n });
				});
		}),
		e("[data-zoom-image]").length)
	) {
		e(".qv-preview");
		e("#zoom-image").elevateZoom({
			gallery: "thumbnails",
			galleryActiveClass: "active",
			zoomType: "inner",
			cursor: "crosshair",
			responsive: !0,
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 500,
			easing: !0,
			lensFadeIn: 500,
			lensFadeOut: 500,
		});
	}
	e(".quantity").length &&
		e(".quantity").each(function () {
			var t = e(this),
				i = t.children("button"),
				n = t.children('input[type="text"]'),
				s = +n.val();
			i.on("click", function () {
				if (e(this).hasClass("qty-minus")) {
					if (1 === s) return !1;
					n.val(--s);
				} else n.val(++s);
			});
		});
	return t;
})(window.jQuery);
function videoPlay(e) {
	var t = e.find(".js-videoIframe"),
		i = t.data("src");
	e.addClass("videoWrapperActive"), t.attr("src", i);
}
if (
	($(document).on("click", ".js-videoPoster", function (e) {
		e.preventDefault(), videoPlay($(this).closest(".js-videoWrapper"));
	}),
	$(function () {
		jQuery("img.svg").each(function () {
			var e = jQuery(this),
				t = e.attr("id"),
				i = e.attr("class"),
				n = e.attr("src");
			jQuery.get(
				n,
				function (n) {
					var s = jQuery(n).find("svg");
					void 0 !== t && (s = s.attr("id", t)),
						void 0 !== i &&
							(s = s.attr("class", i + " replaced-svg")),
						!(s = s.removeAttr("xmlns:a")).attr("viewBox") &&
							s.attr("height") &&
							s.attr("width") &&
							s.attr(
								"viewBox",
								"0 0 " +
									s.attr("height") +
									" " +
									s.attr("width")
							),
						e.replaceWith(s);
				},
				"xml"
			);
		});
	}),
	$("#comparison").length)
) {
	var divisor = document.getElementById("divisor"),
		handle = document.getElementById("handle"),
		slider = document.getElementById("slider");
	function moveDivisor() {
		(handle.style.left = slider.value + "%"),
			(divisor.style.width = slider.value + "%");
	}
	window.onload = function () {
		moveDivisor();
	};
}
if ($("#comparison2").length) {
	var divisor2 = document.getElementById("divisor2"),
		handle2 = document.getElementById("handle2"),
		slider2 = document.getElementById("slider2");
	function moveDivisor2() {
		(handle2.style.left = slider2.value + "%"),
			(divisor2.style.width = slider2.value + "%");
	}
	window.onload = function () {
		moveDivisor2();
	};
}
$(window).on("load resize", function () {
	$(window).width() > 992 &&
		$(".sticky-bar").length &&
		$(".content, .sidebar , .mad-sidebar , #sidebar").theiaStickySidebar({
			additionalMarginTop: 160,
			additionalMarginBottom: 40,
		});
}),
	$(window).on("load resize open", function () {
		var e = $(".mad-grid--isotope:not(.mad-sponsors)");
		e.length &&
			window.MadIsotopeWrapper &&
			e.each(function (e, t) {
				var i = $(t),
					n = i.closest(
						".mad-section--stretched-content, .mad-section--stretched-content-no-px"
					);
				n.length
					? n.on("stretched.mad.Section", function () {
							i.data("IsotopeWrapper") ||
								MadIsotopeWrapper.init(i, {
									itemSelector: ".mad-grid-item",
									transitionDuration: self.ANIMATIONDURATION,
								});
					  })
					: MadIsotopeWrapper.init(i, {
							itemSelector: ".mad-grid-item",
							transitionDuration: self.ANIMATIONDURATION,
					  });
			});
	});

$(document).on("resize, ready", function () {
    console.log('fsdff');
	// Add class if screen size equals
	var $window = $(window),
		$html = $(".mad-navigation2");

	function resize() {
		if ($window.width() < 1201) {
			return $html.addClass("mad-navigation");
		}
		$html.removeClass("mad-navigation");
	}
	$window.resize(resize).trigger("resize");
});
