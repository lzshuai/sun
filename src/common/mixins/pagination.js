/**
 * 翻页组件的混入项
 *
 * */
export default {
    props:{
        pageChange:Function
    },
    data(){
        return{
            pagination:{
                align:'left',
                background:true,
                current:1,
                pageSize:[15,20,50,100],
                size:15,
                totalCount:0,
                layout:'total,size,prev,pager,next,jumper'
            }
        }
    },
    create(){},
    methods:{
        /**
        * 获取翻页数据的方法，可以自己实现
        **/
        getPageData(){
            // todo  your data
        },
        /***
         * 每页显示条数改变时回调函数
         */
        handleSizeChage(val){
            this.pagination.size = val
            this.resetCurrentPage()
            this.getPageData()
        },

        /***
         * 点击翻页组件页面时触发的函数
         * 当返回上一页需要保存页码状态时请求列表数据成功后需要重新调用this.handleCurrentChange(实际页码，true)
         * @param val
         * @param back Boolean   //默认不传，当返回上一页需要保存页码状态时传true
         * 用于解决element分页器bug,返回上一页操作时，页码一直显示第一页高亮当返回上一页需要保存页码状态时请求列表数据成功后需要诚信调用this.handleCurrentChange(this.paginationParams.current,true)
         *
         */
        handleCurrentChange(val,back){
          this.pagination.current = val
          if(!back){
              this.getPageData()
          }
        },
        /**
         * 数据请求成功后刷新页组件的数据
         * @param data
         * */
        setPagination(data){
            this.pagination = Object.assign(this.pagination,data)
        },
        /**
         * 重置当前页面为1
         * */
        resetCurrentPage(){
            this.pagination.current =1
        },
        /**
         * 根据总数进行分页
         * */
        pageDataList(arr){
            if(this.setPagination.totalCount=== undefined && arr.length>0)
                this.setPagination({totalCount: arr.length});
            let start = this.pagination.current*this.pagination.size - this.pagination.size;
            let end = this.pagination.current*this.pagination.size;
            return arr.slice(start,end)
        }

    },
    comuted:{
        paginationParams:function(){
            return {
                current:this.pagination.current,
                size:this.pagination.size
            }
        }
    },
    watch:{
        'pagination.totalCount':function(newVal,oldVal){
            if(newVal < oldVal && newVal % this.pagination.size===0 && this.pagination.current != 1 ){
                this.pagination.current--
                this.handleCurrentChange(this.pagination.current)
            }
        }
    }
}
