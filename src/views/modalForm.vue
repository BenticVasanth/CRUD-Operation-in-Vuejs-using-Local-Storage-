<template>
	<div class="modal" v-show="value">
		<div class="container">
				<div id="popup1" class="overlay">
					<div class="popup">
			<button @click.prevent="close">Close</button>
						<span class="close">&times;</span>
						<form id="clearForm" name="reg" autocomplete="off">
						<br>
						<br>
						<h2>Register Form</h2>
						<br>
						<br>
							<div id="un">
								<label for="userName">User Name</label> 
								<span class="errorTxt" id="userNameValidationError"></span>
								<input class="form-control"  onkeypress="return onlyChar(event)" onfocusout="userNameTxtfocus()" type="text" id="userName" name="userName"  />
							</div>
								<br>
							<div id="lid">
								<label for="loginId">Login Id</label> 
								<span class="errorTxt" id="loginIdValidationError"></span>
								<input class="form-control" onkeypress="return onlyNumLoginId(event)" onfocusout="loginIdTxtfocus()" type="text" id="loginId" name="loginId"  />
							<div>
								<br>
							</div id="db">
								<label for="dob">Date of Birth</label> 
								<span class="errorTxt" id="dobValidationError"></span>
								<input class="form-control" type="date" onfocusout="dobTxtfocus()" id="dob" name="dob"  />
							</div>
								<br>
							<div id="mno">
								<label for="mobileNo">Mobile No.</label> 
								<span class="errorTxt" id="mobileNoValidationError"></span>
								<input class="form-control" type="text" maxlength="10" onkeypress="return onlyNumMobileNo(event)" onfocusout="mobileNoTxtfocus()" id="mobileNo" name="mobileNo"  />
							</div>
								<br>
							<div id="sts">
								<label for="empStatus">Status</label> 
								<span class="errorTxt" id="statusValidationError"></span>
								<select class="form-control" onfocusout="statusTxtfocus()" name="empStatus" id="empStatus">
								  <option class="form-control" selected value="select">select</option>
								  <option class="form-control" value="Active">Active</option>
								  <option class="form-control" value="InActive">InActive</option>
								</select>
								<i id="dropdownIcon" class="fas fa-caret-down"></i>
							</div>
								<br><br>
							<div class="col-12">
								<div class="col-6">
									<input class="button btn" id="save" type="button" value="Submit" onclick="formSubmit()" />
									<input class="button btn" id="update" type="button" value="Update" onclick="updateData(loginId.value)" />
								</div>
								<div class="col-6">
									<input class="button btn" type="button" value="Clear" onclick="btnClear()" />
								</div>
							</div>	
						</form>
					</div>
				</div>
		</div>
	</div>
		</div>
</template>

    <script>
        export default {
            name: 'Modal',
            props: {
                value: {
                    required: true
                }
            },
              methods: {
                close() {
                  this.$emit("input", !this.value);
                }            
            }
        };
    </script>


    <style lang="css" scoped>
        .modal {
          background-color: rgba(0, 0, 0, 0.7);
      }
    </style>