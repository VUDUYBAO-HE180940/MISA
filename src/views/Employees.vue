<template>
  <div class="content employees-view">
    <div class="content__header">
      <div class="content__header__left">
        <h1 class="content__title">Employees</h1>
      </div>
    </div>

    <div class="content__panel">
      <RecruitmentTable
        :candidates="employees"
        :total-count="employees.length"
        :current-page="1"
        :page-size="employees.length || 10"
        :page-count="1"
        :page-start="employees.length ? 1 : 0"
        :page-end="employees.length"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RecruitmentTable from './RecruitmentTable.vue';

const employees = ref([]);

function normalizeEmployee(item) {
  return {
    id: item.id ?? Date.now() + Math.floor(Math.random() * 1000),
    fullName: item.fullName || item.fullname || '',
    phone: item.phone || item.phoneNumber || '',
    email: item.email || '',
    campaign: item.campaign || 'Tuyển dụng SA',
    position: item.position || item.workPosition || '',
    job: item.job || item.campaign || 'Tuyển dụng SA',
    recruitmentRound: item.recruitmentRound || item.round || '--',
    rating: item.rating || '--',
    appliedDate: item.appliedDate || item.dateApplied || item.dateRecruitment || '',
    source: item.source || item.sourceRecruitment || '',
    educationLevel: item.educationLevel || '',
    school: item.school || item.educationSchool || '',
    major: item.major || item.educationMajor || '',
    recentWorkplace: item.recentWorkplace || '',
    recruiter: item.recruiter || item.employeeRecruitment || '',
    unit: item.unit || item.department || '',
    status: item.status || 'Nhân viên',
  };
}

async function loadEmployees() {
  try {
    const response = await fetch('/data/employees.json');
    const data = await response.json();
    employees.value = Array.isArray(data)
      ? data.map(normalizeEmployee).filter((item) => item.status === 'Nhân viên')
      : [];
  } catch (error) {
    console.error('Failed to load employees data', error);
    employees.value = [];
  }
}

onMounted(loadEmployees);
</script>

