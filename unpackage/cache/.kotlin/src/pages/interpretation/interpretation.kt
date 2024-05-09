@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME")
package uni.UNI702E843;
import io.dcloud.uniapp.*;
import io.dcloud.uniapp.extapi.*;
import io.dcloud.uniapp.framework.*;
import io.dcloud.uniapp.runtime.*;
import io.dcloud.uniapp.vue.*;
import io.dcloud.uniapp.vue.shared.*;
import io.dcloud.unicloud.*;
import io.dcloud.uts.*;
import io.dcloud.uts.Map;
import io.dcloud.uts.Set;
import io.dcloud.uts.UTSAndroid;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import kotlinx.coroutines.async;
open class GenPagesInterpretationInterpretation : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenPagesInterpretationInterpretation) -> Any? = fun(
        @Suppress("UNUSED_ANONYMOUS_PARAMETER")
        __props): Any? {
            val __ins = getCurrentInstance()!!;
            val _ctx = __ins.proxy as GenPagesInterpretationInterpretation;
            val _cache = __ins.renderCache;
            val activeIndex = ref(0);
            val switchTab = fun(index){
                activeIndex.value = index;
            }
            ;
            val onSwiperChange = fun(event){
                console.log(event, " at pages/interpretation/interpretation.uvue:27");
            }
            ;
            return fun(): Any? {
                return createElementVNode("view", utsMapOf("class" to "container"), utsArrayOf(
                    createElementVNode("view", utsMapOf("class" to "navbar"), utsArrayOf(
                        createElementVNode("button", utsMapOf("class" to normalizeClass(utsArrayOf(
                            "nav-button",
                            utsMapOf("active" to (unref(activeIndex) === 0))
                        )), "onClick" to fun(){
                            switchTab(0);
                        }
                        ), "Tab 1", 10, utsArrayOf(
                            "onClick"
                        )),
                        createElementVNode("button", utsMapOf("class" to normalizeClass(utsArrayOf(
                            "nav-button",
                            utsMapOf("active" to (unref(activeIndex) === 1))
                        )), "onClick" to fun(){
                            switchTab(1);
                        }
                        ), "Tab 2", 10, utsArrayOf(
                            "onClick"
                        )),
                        createElementVNode("button", utsMapOf("class" to normalizeClass(utsArrayOf(
                            "nav-button",
                            utsMapOf("active" to (unref(activeIndex) === 2))
                        )), "onClick" to fun(){
                            switchTab(2);
                        }
                        ), "Tab 3", 10, utsArrayOf(
                            "onClick"
                        )),
                        createElementVNode("button", utsMapOf("class" to normalizeClass(utsArrayOf(
                            "nav-button",
                            utsMapOf("active" to (unref(activeIndex) === 3))
                        )), "onClick" to fun(){
                            switchTab(3);
                        }
                        ), "Tab 4", 10, utsArrayOf(
                            "onClick"
                        ))
                    )),
                    createElementVNode("swiper", utsMapOf("current" to unref(activeIndex), "onChange" to onSwiperChange), utsArrayOf(
                        createElementVNode("swiper-item", null, utsArrayOf(
                            createElementVNode("image", utsMapOf("src" to "/static/logo.png", "class" to "image"))
                        )),
                        createElementVNode("swiper-item", null, utsArrayOf(
                            createElementVNode("image", utsMapOf("src" to "/static/images/tabBar/user.png", "class" to "image"))
                        )),
                        createElementVNode("swiper-item", null, utsArrayOf(
                            createElementVNode("image", utsMapOf("src" to "/static/images/tabBar/user-h.png", "class" to "image"))
                        )),
                        createElementVNode("swiper-item", null, utsArrayOf(
                            createElementVNode("image", utsMapOf("src" to "/static/images/box1.png", "class" to "image"))
                        ))
                    ), 40, utsArrayOf(
                        "current"
                    ))
                ));
            }
            ;
        }
        ;
        val styles: Map<String, Map<String, Map<String, Any>>>
            get() {
                return normalizeCssStyles(utsArrayOf(
                    styles0
                ), utsArrayOf(
                    GenApp.styles
                ));
            }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return utsMapOf("navbar" to padStyleMapOf(utsMapOf("display" to "flex", "justifyContent" to "space-around")), "nav-button" to padStyleMapOf(utsMapOf("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "active" to padStyleMapOf(utsMapOf("color" to "#FF0000")), "image" to padStyleMapOf(utsMapOf("width" to "100%", "height" to "100%")));
            }
        var inheritAttrs = true;
        var inject: Map<String, Map<String, Any?>> = utsMapOf();
        var emits: Map<String, Any?> = utsMapOf();
        var props = normalizePropsOptions(utsMapOf());
        var propsNeedCastKeys: UTSArray<String> = utsArrayOf();
        var components: Map<String, CreateVueComponent> = utsMapOf();
    }
}
