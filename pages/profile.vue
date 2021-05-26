<template>
  <div class="container">
    <h2 class="reg-title">Профіль лікаря</h2>
    <div class="doc">
      <div class="doc-info">
        <p class="doc-info-title">Ім'я:</p>
        <p class="doc-first-name">{{ doctor.first_name }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Прізвище:</p>
        <p class="doc-last-name">{{ doctor.last_name }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Електронна пошта:</p>
        <p class="doc-email">{{ doctor.email }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Телефон:</p>
        <p class="doc-phone">{{ doctor.phone }}</p>
      </div>
      <div class="doc-info">
        <p class="doc-info-title">Посада:</p>
        <p class="doc-work">Лікар</p>
      </div>
    </div>

    <div class="patient">
      <h2 class="reg-title">Процес лікування</h2>
      <div v-if="docPatients">
        <div
          v-for="(item, index) of docPatients"
          :key="index"
          class="doctor-patient"
        >
          <p class="patient-name">{{ item.name }}</p>
          <p>{{ item.syptoms }}</p>
          <p>{{ item.medicine }}</p>
        </div>
      </div>
      <div>
        <button
          v-if="buttonForm"
          class="app-button add-patient"
          @click="formPatient"
        >
          Додати пацієнта
        </button>
      </div>
      <div v-if="isFormPatient" class="form-patient">
        <input v-model="patient.name" type="text" placeholder="Ім`я" />
        <input v-model="patient.syptoms" type="text" placeholder="Симптоми" />
        <input
          v-model="patient.medicine"
          type="text"
          placeholder="Медикаменти"
        />
        <button class="app-button add-patient" @click="addPatient">
          Додати пацієнта
        </button>
      </div>
    </div>
    <Medicine v-if="likedIds.length" :ids="likedIds" />
    <div class="div-logout">
      <button class="button-logout" @click="$auth.logout()">Вийти</button>
    </div>
  </div>
</template>

<script>
import Medicine from '@/components/Medicine.vue'

export default {
  components: {
    Medicine,
  },
  async asyncData({ params, store, redirect, app: { localePath, $auth } }) {
    try {
      const data = await store.dispatch('doctor/getOne', $auth.user.email)
      const doctor = data[0]
      return { doctor }
    } catch (error) {
      redirect(localePath('/'))
    }
  },
  data() {
    return {
      user: this.$auth.user,
      isFormPatient: false,
      patient: {
        name: '',
        syptoms: '',
        medicine: '',
      },
      patientDoc: '',
      docPatients: '',
      buttonForm: true,
    }
  },
  computed: {
    likedIds() {
      return this.$store.state.doctor.liked
    },
    likedMedicines() {
      return this.$store.state.medicine.medicines.filter((item) => {
        return this.likedIds.includes(item.id)
      })
    },
  },
  mounted() {
    this.getPatient()
    // console.log(this.doctor.id)
  },
  methods: {
    addPatient() {
      this.data = {
        id: this.doctor._id,
        name: this.patient.name,
        syptoms: this.patient.syptoms,
        medicine: this.patient.medicine,
      }
      this.$store
        .dispatch('patient/addPatient', this.data)
        .then((res) => {
          console.log(res.data)
          this.getPatient()
        })
        .catch((error) => {
          this.errorText = error.response.data.error.message
        })
        .finally(() => {})
    },
    getPatient() {
      if (this.doctor) {
        this.$store
          .dispatch('patient/getById', this.doctor._id)
          .then((res) => {
            this.docPatients = res
            console.log(res)
          })
          .catch((error) => {
            this.errorText = error.response.data.error.message
          })
          .finally(() => {})
      }
    },
    formPatient() {
      this.isFormPatient = true
      this.buttonForm = false
    },
  },
}
</script>

<style lang="scss" scoped>
.button-logout {
  background: #406f70;
  border-radius: 3px;
  width: 100px;
  height: 20px;
  outline: none;
  border: none;
  font-weight: 800;
  font-size: 15px;
  line-height: 1.2em;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.div-logout {
  display: flex;
  margin: 10px 0 15px;
  justify-content: center;
}

.doc-info {
  margin: 20px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(95, 158, 160, 0.479);

  &:first-child {
    margin-top: 10px;
  }

  &-title {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    color: rgba(95, 160, 144, 0.719);
  }
}

.doc {
  padding: 10px;
  // background-color: rgba(95, 158, 160, 0.479);
  margin-top: 20px;
  margin: auto;
  max-width: 300px;
}

.doctor-patient {
  margin: 20px 0;
  background-color: rgba(57, 97, 77, 0.521);
  border-radius: 20px;
  padding: 10px;
}
.patient-name {
  margin-bottom: 10px;
  font-weight: bold;
}
.add-patient {
  width: 150px;
  font-size: 14px;
  height: 20px;
}
.form-patient {
  margin-top: 30px;
  button {
    margin-top: 20px;
  }
}
</style>
