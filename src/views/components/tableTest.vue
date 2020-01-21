<template>
    <div>
        <el-table
                ref="tab"
                stripe
                :header-cell-style="dealHeadStyle"
                :data="tabData">
            <el-table-column
                v-for ="(item,index) in colArr"
                :key="index"
                :prop="item.colName"
                :label="item.colName"
                width="180">
               <!-- <template slot-scope="scope">
                    <span>
                        {{scope.row[index]}},{{scope.row.sage}}
                    </span>
                </template>-->
                <slot :row="item" :$index="index"></slot>
            </el-table-column>
        </el-table>
        <hr>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="280"
                    :formatter="formatter">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="标签"
                    width="100"
                    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.tag === '家' ? 'primary' : 'success'"
                            close-transition>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "tableTest",
        data(){
            return{
                tabData:[
                    {sid:'tefd989786',tNames:"TOM",sage:'20'},
                    {sid:'tefd989743',tNames:"LINDA",sage:'21'},
                    {sid:'tefd989754',tNames:"Jack",sage:'19'},
                    {sid:'tefd989752',tNames:"Alge",sage:'22'}
                ],
                colArr:[
                    {colName:'sid'},
                    {colName:'tNames'},
                    {colName:'sage'},
                ],
                
                tableData: [{
                    date: '2020-05-02',
                    name: '王小虎',
                    address: '旧金山普陀区金沙江路 1518 弄',
                    tag: '家'
                }, {
                    date: '2020-05-04',
                    name: '王大虎',
                    address: '普陀区金沙江路 1517 弄',
                    tag: '学校'
                }, {
                    date: '2020-05-01',
                    name: '王小名',
                    address: '上海市普陀区金沙江路 1519 弄',
                    tag: '家'
                },]
            }
        },
        methods:{
            //给表头添加背景色
            dealHeadStyle(){
                return{
                    background:'#2b2b2b'
                }
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            }
        }
    }
</script>

<style scoped>

</style>