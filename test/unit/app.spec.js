import Vue from 'vue';
import app from '../../src/app.vue';
import child from '../../src/components/child.vue';
/*组件加载后的状态*/
// 描述要测试的内容
describe('test app.vue',()=>{
	// 描述要测试的最小单元
	it('组件加载之后,title应该是hello world',()=>{
		//将app生成vue实例，并使用￥mount（）模拟挂载
		let vm = new Vue(app).$mount();
		//断言组件的title是否变成了Hello world!'
		expect(vm.title).toEqual('Hello world!')
	})
})
/*测试组件里面的方法*/
describe('test app.vue',()=>{
	it('设置message为【你好全世界】',()=>{
		let vm =new Vue(app).$mount();
		vm.setMessage('你好全世界');
		expect(vm.message).toEqual('你好全世界')
	})
})
/*filter测试*/
describe('test app.vue',()=>{
	it('upperCase过滤器将app转换为APP',()=>{
		// vue组件export出来的诗歌对象，可以直接使用这个对象的属性和方法就能调用到要测试的filter
		let appStr=app.filters.upperCase('app')
		//断言组件的appStr是否为’APP‘
		expect(appStr).toEqual('APP')
	})
})
/*测试props*/
/*
 *获取生成的vm
 * 
 * @param {object} Component 组件
 * @param {object} propsData props数据
 * @return {object} vue实例*/
function getRenderVm(Component,propsData){
	const Ctor=Vue.extend(Component);
	const vm =new Ctor({propsData}).$mount();
	return vm
}
describe('test child.vue',()=>{
	it('组件加载后，child组件中的message为这是子组件1',()=>{
		let childVm=getRenderVm(child,{
			message:'这是子组件'
		})
		expect(childVm.message).toEqual('这是子组件')
	})
})

/*异步更新DOM的情况*/
 describe('test app.vue',()=>{
 	// 异步数据更新
 	it('数据更新后，视图应该改变',done=>{
 		let vm=new Vue(app).$mount()
 		vm.title='latest';
 		Vue.nextTick(()=>{
 			let title=vm.$el.getElementsByTagName('h1')[0];
 			expect(title.textContent).toEqual('LATEST')
 			done();
 		})
 	})
 })
