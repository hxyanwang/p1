<template>
	<div class="fundList">
		
		<el-table
		    :data="list"
		    style="width: 100%"
		>
			
			<el-table-column
				type="index"
				label="序号"
				width="70"
				align='center'
			>
			</el-table-column>	
			<el-table-column
				prop='date'
				label="日期"
				width="220"
				align='center'
			>
			</el-table-column>	
			<el-table-column
				prop='type'
				label="类型"
				width="150"
				align='center'
			>
			</el-table-column>	
			<el-table-column
				prop='describe'
				label="描述"
				width="150"
				align='center'
			>
			</el-table-column>	
			<el-table-column
				prop='income'
				label="收入"
				width="150"
				align='center'
			>
				<template slot-scope="scope">
				    <span style="color:#00d053">+ {{ scope.row.income }}</span>
				</template>
			</el-table-column>	
			<el-table-column
				prop='expend'
				label="支出"
				width="150"
				align='center'
			>
				<template slot-scope="scope">
				    <span style="color:#f56767">- {{ scope.row.expend }}</span>
				</template>
			</el-table-column>	
			<el-table-column
				prop='cash'
				label="现金"
				width="150"
				align='center'
			>
				<template slot-scope="scope">
				    <span style="color:#4db3ff">{{ scope.row.cash }}</span>
				</template>
			</el-table-column>	
			<el-table-column
				prop="remark"
				label="备注"
				width="150"
				align='center'
			>
			</el-table-column>	
			
			<el-table-column label="操作">
			      <template slot-scope="scope">
			        <el-button
			          size="small"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			</el-table-column>
									
		</el-table>
		  
	</div>
</template>

<script>
	export default{
		name:'fundList',
		data(){
			return{
				list:[]
			}
		},
		created() {
			this.getList();
		},
		methods: {
			getList(){
				this.$axios.get("/api/profiles")
					.then(res=>{
						this.list=res.data;
						this.list.forEach(item=>{
							item.date=new Date(item.date);
							let a =this.$common.formatDate(item.date,'yyyy年MM月dd日 \n hh:mm:ss');
							item.date=a;
							// console.log(a);
						})
						// console.log(this.list);
					})
					.catch(err=>{
						console.log(err);
					})
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				this.$axios.post("/api/profiles/delete",{id:row._id})
				.then(res=>{
					console.log(res)
				})
				.catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.fundList{
		width:100%;
		padding-top:70px;
	}
	.el-table th>.cell{
		background: black;
	}

</style>
