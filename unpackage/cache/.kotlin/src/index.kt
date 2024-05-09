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
import io.dcloud.uniapp.appframe.AppConfig;
import io.dcloud.uniapp.extapi.exit as uni_exit;
import io.dcloud.uniapp.extapi.showToast as uni_showToast;
var firstBackTime: Number = 0;
open class GenApp : BaseApp {
    constructor(instance: ComponentInternalInstance) : super(instance) {
        onLaunch(fun(_: OnLaunchOptions) {
            console.log("App Launch", " at App.uvue:5");
        }
        , instance);
        onAppShow(fun(_: OnShowOptions) {
            console.log("App Show", " at App.uvue:8");
        }
        , instance);
        onHide(fun() {
            console.log("App Hide", " at App.uvue:11");
        }
        , instance);
        onLastPageBackPress(fun() {
            console.log("App LastPageBackPress", " at App.uvue:15");
            if (firstBackTime == 0) {
                uni_showToast(ShowToastOptions(title = "再按一次退出应用", position = "bottom"));
                firstBackTime = Date.now();
                setTimeout(fun(){
                    firstBackTime = 0;
                }, 2000);
            } else if (Date.now() - firstBackTime < 2000) {
                firstBackTime = Date.now();
                uni_exit(null);
            }
        }
        , instance);
        onExit(fun() {
            console.log("App Exit", " at App.uvue:32");
        }
        , instance);
    }
    companion object {
        val styles: Map<String, Map<String, Map<String, Any>>>
            get() {
                return normalizeCssStyles(utsArrayOf(
                    styles0
                ));
            }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return utsMapOf("uni-row" to padStyleMapOf(utsMapOf("flexDirection" to "row")), "uni-column" to padStyleMapOf(utsMapOf("flexDirection" to "column")));
            }
    }
}
val GenAppClass = CreateVueAppComponent(GenApp::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(name = "", inheritAttrs = true, inject = Map(), props = Map(), propsNeedCastKeys = utsArrayOf(), emits = Map(), components = Map(), styles = GenApp.styles);
}
, fun(instance): GenApp {
    return GenApp(instance);
}
);
val GenPagesHomeHomeClass = CreateVueComponent(GenPagesHomeHome::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(name = "", inheritAttrs = GenPagesHomeHome.inheritAttrs, inject = GenPagesHomeHome.inject, props = GenPagesHomeHome.props, propsNeedCastKeys = GenPagesHomeHome.propsNeedCastKeys, emits = GenPagesHomeHome.emits, components = GenPagesHomeHome.components, styles = GenPagesHomeHome.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenPagesHomeHome.setup(props as GenPagesHomeHome);
    }
    );
}
, fun(instance): GenPagesHomeHome {
    return GenPagesHomeHome(instance);
}
);
val GenPagesInterpretationInterpretationClass = CreateVueComponent(GenPagesInterpretationInterpretation::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(name = "", inheritAttrs = GenPagesInterpretationInterpretation.inheritAttrs, inject = GenPagesInterpretationInterpretation.inject, props = GenPagesInterpretationInterpretation.props, propsNeedCastKeys = GenPagesInterpretationInterpretation.propsNeedCastKeys, emits = GenPagesInterpretationInterpretation.emits, components = GenPagesInterpretationInterpretation.components, styles = GenPagesInterpretationInterpretation.styles, setup = fun(props: ComponentPublicInstance): Any? {
        return GenPagesInterpretationInterpretation.setup(props as GenPagesInterpretationInterpretation);
    }
    );
}
, fun(instance): GenPagesInterpretationInterpretation {
    return GenPagesInterpretationInterpretation(instance);
}
);
val GenPagesTechnologyTechnologyClass = CreateVueComponent(GenPagesTechnologyTechnology::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(name = "", inheritAttrs = GenPagesTechnologyTechnology.inheritAttrs, inject = GenPagesTechnologyTechnology.inject, props = GenPagesTechnologyTechnology.props, propsNeedCastKeys = GenPagesTechnologyTechnology.propsNeedCastKeys, emits = GenPagesTechnologyTechnology.emits, components = GenPagesTechnologyTechnology.components, styles = GenPagesTechnologyTechnology.styles);
}
, fun(instance): GenPagesTechnologyTechnology {
    return GenPagesTechnologyTechnology(instance);
}
);
val GenPagesUserUserClass = CreateVueComponent(GenPagesUserUser::class.java, fun(): VueComponentOptions {
    return VueComponentOptions(name = "", inheritAttrs = GenPagesUserUser.inheritAttrs, inject = GenPagesUserUser.inject, props = GenPagesUserUser.props, propsNeedCastKeys = GenPagesUserUser.propsNeedCastKeys, emits = GenPagesUserUser.emits, components = GenPagesUserUser.components, styles = GenPagesUserUser.styles);
}
, fun(instance): GenPagesUserUser {
    return GenPagesUserUser(instance);
}
);
fun createApp(): UTSJSONObject {
    val app = createSSRApp(GenAppClass);
    return object : UTSJSONObject() {
        var app = app
    };
}
fun main(app: IApp) {
    definePageRoutes();
    defineAppConfig();
    (createApp()["app"] as VueApp).mount(app);
}
open class UniAppConfig : AppConfig {
    override var name: String = "maixiaobao";
    override var appid: String = "__UNI__702E843";
    override var versionName: String = "1.0.0";
    override var versionCode: String = "100";
    override var uniCompileVersion: String = "4.07";
    constructor(){}
}
fun definePageRoutes() {
    __uniRoutes.push(PageRoute(path = "pages/home/home", component = GenPagesHomeHomeClass, meta = PageMeta(isQuit = true), style = utsMapOf("navigationBarTitleText" to "首页", "navigationStyle" to "custom")));
    __uniRoutes.push(PageRoute(path = "pages/interpretation/interpretation", component = GenPagesInterpretationInterpretationClass, meta = PageMeta(isQuit = false), style = utsMapOf("navigationBarTitleText" to "专家解读")));
    __uniRoutes.push(PageRoute(path = "pages/technology/technology", component = GenPagesTechnologyTechnologyClass, meta = PageMeta(isQuit = false), style = utsMapOf("navigationBarTitleText" to "农业技术")));
    __uniRoutes.push(PageRoute(path = "pages/user/user", component = GenPagesUserUserClass, meta = PageMeta(isQuit = false), style = utsMapOf("navigationBarTitleText" to "个人中心")));
}
val __uniTabBar: Map<String, Any?>? = utsMapOf("color" to "#9799a5", "selectedColor" to "#28B389", "borderStyle" to "white", "list" to utsArrayOf(
    utsMapOf("pagePath" to "pages/home/home", "iconPath" to "static/images/tabBar/home.png", "selectedIconPath" to "static/images/tabBar/home-h.png", "text" to "首页"),
    utsMapOf("pagePath" to "pages/interpretation/interpretation", "iconPath" to "static/images/tabBar/interpretation.png", "selectedIconPath" to "static/images/tabBar/interpretation-h.png", "text" to "专家解读"),
    utsMapOf("pagePath" to "pages/technology/technology", "iconPath" to "static/images/tabBar/technology.png", "selectedIconPath" to "static/images/tabBar/technology-h.png", "text" to "农技"),
    utsMapOf("pagePath" to "pages/user/user", "iconPath" to "static/images/tabBar/user.png", "selectedIconPath" to "static/images/tabBar/user-h.png", "text" to "我的")
));
val __uniLaunchPage: Map<String, Any?> = utsMapOf("url" to "pages/home/home", "style" to utsMapOf("navigationBarTitleText" to "首页", "navigationStyle" to "custom"));
@Suppress("UNCHECKED_CAST")
fun defineAppConfig() {
    __uniConfig.entryPagePath = "/pages/home/home";
    __uniConfig.globalStyle = utsMapOf("navigationBarTextStyle" to "black", "navigationBarTitleText" to "麦小保", "navigationBarBackgroundColor" to "#fff", "backgroundColor" to "#F8F8F8");
    __uniConfig.tabBar = __uniTabBar as Map<String, Any>?;
    __uniConfig.conditionUrl = "";
    __uniConfig.uniIdRouter = utsMapOf();
    __uniConfig.ready = true;
}
fun getApp(): GenApp {
    return getBaseApp() as GenApp;
}
