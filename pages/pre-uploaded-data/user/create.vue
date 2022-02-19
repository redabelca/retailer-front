<script>
/**
 * Advanced Table component
 */
export default {
  data() {
    return {};
  }
};
</script>

<template>
  <div>
    <PageHeader title="Pre Uploaded Data" />
    <div class="card">
      <div class="card-body">
        <h4 class="header-title m-t-0">Basic Form</h4>
        <div class="row">
          <div class="col-12 col-lg-6">
            <form @submit.prevent="() => {}">
              <div class="form-group">
                <label for="name">
                  User Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="username"
                  name="username"
                  class="form-control"
                  :class="{ 'is-invalid': false }"
                  type="text"
                  placeholder="Enter user name"
                />
              </div>
              <div class="form-group">
                <label>
                  Email address
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': false }"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label>
                  Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  :class="{
                    'is-invalid': false
                  }"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="passWord2">
                  Confirm Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="passWord2"
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  :class="{
                    'is-invalid': false
                  }"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
          <div class="col-12 col-lg-6">
            <form @submit.prevent="() => {}">
              <div class="form-group">
                <label for="name">
                  User Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="username"
                  name="username"
                  class="form-control"
                  :class="{ 'is-invalid': false }"
                  type="text"
                  placeholder="Enter user name"
                />
              </div>
              <div class="form-group">
                <label>
                  Email address
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': false }"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label>
                  Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  :class="{
                    'is-invalid': false
                  }"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="passWord2">
                  Confirm Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="passWord2"
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  :class="{
                    'is-invalid': false
                  }"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <div class="checkbox checkbox-purple">
                  <input id="checkbox6a" type="checkbox" />
                  <label for="checkbox6a">Remember me</label>
                </div>
              </div>
            </form>
            <div class="form-group text-right m-b-0">
              <button class="btn btn-primary" type="submit">Submit</button>
              <button type="reset" class="btn btn-secondary m-l-5 ml-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn .mdi:before {
  transform: scale(1.7);
}
</style>
