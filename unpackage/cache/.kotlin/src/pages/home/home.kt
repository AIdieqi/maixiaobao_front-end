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
import io.dcloud.uniapp.extapi.chooseImage as uni_chooseImage;
import io.dcloud.uniapp.extapi.uploadFile as uni_uploadFile;
open class GenPagesHomeHome : BasePage {
    constructor(instance: ComponentInternalInstance) : super(instance) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenPagesHomeHome) -> Any? = fun(
        @Suppress("UNUSED_ANONYMOUS_PARAMETER")
        __props): Any? {
            val __ins = getCurrentInstance()!!;
            val _ctx = __ins.proxy as GenPagesHomeHome;
            val _cache = __ins.renderCache;
            val uploadImage = fun(filePath: String){
                val uploadTask = uni_uploadFile(UploadFileOptions(url = "https://www.baidu.com/post", filePath = filePath, name = "file", success = fun(uploadFileRes){
                    console.log("上传成功", uploadFileRes, " at pages/home/home.uvue:16");
                }
                , fail = fun(uploadFileErr){
                    console.log("上传失败", uploadFileErr, " at pages/home/home.uvue:20");
                }
                ));
            }
            ;
            val selectImage = fun(){
                uni_chooseImage(ChooseImageOptions(count = 1, sourceType = utsArrayOf(
                    "album",
                    "camera"
                ), success = fun(res){
                    console.log(res.tempFilePaths, " at pages/home/home.uvue:32");
                    uploadImage(res.tempFilePaths[0]);
                }
                ));
            }
            ;
            return fun(): Any? {
                return createElementVNode("view", utsMapOf("class" to "container"), utsArrayOf(
                    createElementVNode("image", utsMapOf("class" to "upload-image", "src" to "/static/images/box1.png", "onClick" to selectImage))
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
                return utsMapOf("container" to padStyleMapOf(utsMapOf("display" to "flex", "justifyContent" to "center", "alignItems" to "center", "height" to "100%")), "upload-image" to padStyleMapOf(utsMapOf("width" to "80%", "height" to "40%")));
            }
        var inheritAttrs = true;
        var inject: Map<String, Map<String, Any?>> = utsMapOf();
        var emits: Map<String, Any?> = utsMapOf();
        var props = normalizePropsOptions(utsMapOf());
        var propsNeedCastKeys: UTSArray<String> = utsArrayOf();
        var components: Map<String, CreateVueComponent> = utsMapOf();
    }
}
