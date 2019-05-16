/**
 * 全局导航跳转工具类
 */

export default class NavigationUtil {
    // 返回上一页
    static goBack(params) {
        const {navigation} = params;
        navigation.goBack();
    }
    // 重置到首页
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }
    // 调转到指定页面
    static goPage(params, page) {
        // const {navigation} = params;
        const navigation = NavigationUtil.navigation
        if (!navigation) {
            console.log('null');
            return
        }
        navigation.navigate(page, {...params})
    }


}
