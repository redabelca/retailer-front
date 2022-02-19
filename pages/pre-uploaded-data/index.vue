<script>
/**
 * Advanced Table component
 */
export default {
  data() {
    return {
      contacts: [
        {
          profile:
            "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-store-supermarket-flatart-icons-outline-flatarticons.png",
          name: "Store",
          route: "/pre-uploaded-data/store"
        },
        {
          profile: "https://img.icons8.com/ios/50/000000/used-product.png",
          name: "Product",
          route: "/pre-uploaded-data/product"
        },
        {
          profile: "https://img.icons8.com/ios/50/000000/category.png",
          name: "Segment",
          route: "/pre-uploaded-data/segment"
        },
        {
          profile: "https://img.icons8.com/dotty/80/000000/category.png",
          name: "Sub Segment",
          route: "/pre-uploaded-data/sub-segment"
        },
        {
          profile:
            "https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-brand-business-model-canvas-wanicon-lineal-wanicon.png",
          name: "Brand",
          route: "/pre-uploaded-data/brand"
        },
        {
          profile:
            "https://img.icons8.com/material-outlined/96/000000/administrator-male.png",
          name: "User",
          route: "/pre-uploaded-data/user"
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <PageHeader title="Pre Uploaded Data" />
    <div class="row">
      <div
        class="col-xl-3 col-sm-6"
        v-for="(item, index) in contacts"
        :key="index"
      >
        <div class="text-center card">
          <nuxt-link :to="item.route" class="card-body">
            <img
              v-if="item.profile"
              :src="item.profile"
              class="avatar-xl mt-1"
              alt="profile-image"
            />
            <h4 :class="{ 'mt-3': item.profile }" class="mb-1">
              <span class="text-dark">{{ item.name }}</span>
            </h4>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
