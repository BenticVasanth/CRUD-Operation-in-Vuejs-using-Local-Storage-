<template>
	<div class="container" id="UserForm">
		<form @submit.prevent="onSubmit" name="reg" autocomplete="off">
			<br>
			<br>
			<h2>Register Form</h2>
			<br>
			<br>
			<!--<div id="un" :class="{ 'errorInput': $v.regFormData.userName.$error }">
				<label for="userName">User Name</label>
					<p class="errorText" v-if="!$v.regFormData.userName.required"> Field is required!</p>
                    <p class="errorText" v-if="!$v.regFormData.userName.minLength"> Name must have at least {{ $v.regFormData.userName.$params.minLength.min }} !</p>				
				<input v-model="regFormData.userName" 
					   :class="{ error: $v.regFormData.userName.$error }" 
					   @change="$v.regFormData.userName.$touch()" 
					   class="form-control" 
					   type="text" 
					   id="userName" 
					   name="userName"  />
			</div>-->
			<div id="un">
				<label for="userName">User Name</label>
				<input v-model="regFormData.userName" class="form-control" type="text" id="userName" name="userName"  />
			</div>
				 <br>
			<div id="lid">
				<label for="loginId">Login Id</label> 
				<input v-model="regFormData.loginId" :disabled="isDisabled" class="form-control" type="text" id="loginId" name="loginId"  />
			</div>
				<br>
			<div id="db">
				<label for="dob">Date of Birth</label> 
				<input v-model="regFormData.dob" class="form-control" type="date" id="dob" name="dob"  />
			</div>
				<br>
			<div id="mno">
				<label for="mobileNo">Mobile No.</label> 
				<input v-model="regFormData.mobileNo" class="form-control" type="text" id="mobileNo" name="mobileNo"  />
			</div>
				<br>
			<div id="sts">
				<label for="empStatus">Status</label> 
				<select v-model="regFormData.empStatus" class="form-control" name="empStatus" id="empStatus">
				  <option class="form-control" selected value="-1">select</option>
				  <option class="form-control" value="Active">Active</option>
				  <option class="form-control" value="InActive">InActive</option>
				</select>
				<i id="dropdownIcon" class="fas fa-caret-down"></i>
			</div> 
				<br><br>
			<div class="col-12">
				<div class="col-6">
					<button class="button btn" v-if="isHidden" @click="isDisabled=false" id="save">Submit</button>
				   <input class="button btn" v-if="!isHidden" id="update" type="button" value="Update" @click="updateData(regFormData.loginId); isHidden=true; isDisabled=false"/>
				</div>
				<div class="col-6">
					<input class="button btn" type="button" value="Clear" @click="resetForm(); isHidden=true; isDisabled=false" />
				</div>
			</div>	
		</form>
		<div class="row content">
			<div id="about">
				<!--<div class="row f-right">
					<button id="myBtn" class="button">Add</button>
				</div>-->
				<div class="row employees-table">
					<table class="list" id="employeeList">
						<thead>
							<tr>
								<th>S.No.</th>
								<th>User Name</th>
								<th>Login Id</th>
								<th>Date of Birth</th>
								<th>Mobile No</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody id="tdata">
							<tr v-for="emp,index in regArrayInfo" :key='index'>
								<td> {{++index}} </td>  
								<td> {{emp.userName}} </td>  
								<td> {{emp.loginId}} </td>  
								<td> {{emp.dob}} </td> 
								<td> {{emp.mobileNo}} </td> 
								<td> {{emp.empStatus}} </td>
								<td>
									<a href="#" @click="editUser(emp.loginId); isHidden=false; isDisabled=true"><img src="@/assets/images/edit.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<a @click="onDelete(emp.loginId)"><img src="@/assets/images/delete.png"></a>
								</td>
							</tr>
							<tr v-if="!regArrayInfo.length">
								<td id="noRecord" colspan="8">No Record Found</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import componentHeader from '@/views/User.vue'

export default {
	data() {
		  return{
			isHidden: true,  
			isDisabled:false,
			regArrayInfo: [],
			regFormData:{
				userName:'',
				loginId:'',
				dob:'',
				mobileNo:'',
				empStatus:'-1'
			},
		  };
	  },
	validations: {
		regFormData:{
			userName: {
				required,
				minLength: minLength(4)
			}
		},
	},
	methods: {
		onSubmit() {
			/*this.$v.$touch()
				if(!this.$v.$invalid) {
					return;
					 const user = {
						userName: this.regFormData.userName
					}
					console.log(user) 
				}*/
			this.regArrayInfo.push(this.regFormData);
			this.resetForm();
		},
		resetForm() { 
			this.regFormData={
				userName:'',
				loginId:'',
				dob:'',
				mobileNo:'',
				empStatus:'-1'
			}
	    },
		editUser(val){
			//console.log(val);
			var emp = val;
			var empUpdateArrayDetail = this.regArrayInfo.filter( empArrayDetail => empArrayDetail.loginId === emp).map(displayData => {  
			this.regFormData.userName = displayData.userName,
			this.regFormData.loginId = displayData.loginId, 
			this.regFormData.dob = displayData.dob, 
			this.regFormData.mobileNo = displayData.mobileNo,
			this.regFormData.empStatus = displayData.empStatus
			} ); 
		},
		updateData(val){
			//console.log(val);
			this.regArrayInfo.splice(this.regArrayInfo.findIndex(x => x.loginId === val), 1,
			({userName:this.regFormData.userName,
			loginId:this.regFormData.loginId, 
			dob:this.regFormData.dob, 
			mobileNo:this.regFormData.mobileNo,
			empStatus:this.regFormData.empStatus}));
			this.resetForm();
		},
		onDelete(val){
			console.log(val);
			 if (confirm('Are you sure to delete this record ?')){
		var empArrayDetail = this.regArrayInfo.splice(this.regArrayInfo.findIndex(value => value.loginId == val ),1);
			}
		}, 
	  },
	  mounted() {
		console.log('App mounted!');
		if (localStorage.getItem('regArrayInfo')) {
			this.regArrayInfo = JSON.parse(localStorage.getItem('regArrayInfo'))
		};
	  },
	  watch: {
		regArrayInfo: {
		  handler() {
			console.log('regArrayInfo changed!');
			localStorage.setItem('regArrayInfo', JSON.stringify(this.regArrayInfo));
		  },
		  deep: true,
		},
	  }
};
</script>