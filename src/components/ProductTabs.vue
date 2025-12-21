<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('description')
</script>

<template>
  <div class="tabs-container">
    <!-- TABS -->
    <div class="tabs">
      <button :class="{ active: activeTab === 'description' }" @click="activeTab = 'description'">
        Description
      </button>

      <button :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">
        Additional info
      </button>

      <button :class="{ active: activeTab === 'reviews' }" @click="activeTab = 'reviews'">
        Reviews
      </button>
    </div>

    <!-- CONTENT -->
    <div class="content">
      <p v-if="activeTab === 'description'">
        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes
        off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near
        unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
        Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed
        that alas rethought much decently richly and wow against the frequent fluidly at formidable
        acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
        mastodon goodness gnashed a jellyfish and one however because.
      </p>

      <p v-if="activeTab === 'info'">
        
      </p>

      <p v-if="activeTab === 'reviews'">
        
      </p>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
    width: 80%;
  border: 1px solid #f0f0f0;
  border-radius: 14px;
  padding: 25px;
  margin-top: 40px;
}

.tabs {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #eee;
  background: white;
  cursor: pointer;
  color: #aaa;
}

.tabs button.active {
  background: #e8f5ee;
  color: #3bb77e;
  font-weight: 600;
}

.content {
  color: #777;
  line-height: 1.8;
}
</style>
