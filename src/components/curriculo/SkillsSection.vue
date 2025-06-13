<template>
  <section id="skills-section" class="py-20 bg-gray-900 print:py-8 relative overflow-hidden">
    <!-- Particle Components -->
    <ProgrammingParticles class="absolute inset-0 print:hidden" style="z-index: 50;" />
    <AdvancedCodeParticles class="absolute inset-0 print:hidden" style="z-index: 11;" />
    <AnimatedBackground class="absolute inset-0 print:hidden" style="z-index: 10;" />

    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="z-index: 5;">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <!-- Decorative Static Elements (without animations that caused overflow) -->
    <div class="absolute inset-0 hidden md:block print:hidden pointer-events-none" style="z-index: 5;">
      <div class="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl mix-blend-overlay"></div>
      <div class="absolute bottom-40 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl mix-blend-overlay"></div>
      <div class="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl mix-blend-overlay"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 20;">

      <!-- Section Header -->
      <div class="text-center mb-16 print:mb-8 relative">
        <div class="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -translate-y-1/2 hidden md:block"></div>

        <!-- Decorative Badges (Hidden in Print) -->
        <div class="hidden md:flex absolute -top-4 left-1/2 transform -translate-x-1/2 gap-2 print:hidden">
          <span class="bg-blue-500/10 text-blue-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-blue-500/20">
            <span class="inline-flex items-center">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              Developer
            </span>
          </span>
          <span class="bg-emerald-500/10 text-emerald-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <span class="inline-flex items-center">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
              </svg>
              Designer
            </span>
          </span>
          <span class="bg-purple-500/10 text-purple-400 text-xs font-medium px-2.5 py-0.5 rounded-full border border-purple-500/20">
            <span class="inline-flex items-center">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
              </svg>
              Criativo
            </span>
          </span>
        </div>

        <h2 class="text-3xl font-bold text-white mb-4 print:text-2xl print:mb-2 relative inline-block px-8 bg-gray-900">
          <span class="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent relative">
            Competências Tecnológicas
            <span class="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-emerald-500/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </span>
        </h2>
        <p class="text-lg text-gray-300 print:text-sm max-w-3xl mx-auto leading-relaxed">
          Um conjunto diversificado de <span class="text-blue-400 font-medium">habilidades técnicas</span> e <span class="text-emerald-400 font-medium">competências profissionais</span> que me permite entregar soluções completas e de alto valor, combinando <span class="text-purple-400 font-medium">criatividade</span> e <span class="text-amber-400 font-medium">eficiência</span>
        </p>
      </div>

      <!-- Main Skills Container -->
      <div>
        <!-- Technical Skills Showcase -->
        <div class="mb-16 print:mb-10">
          <div class="flex items-center justify-between mb-8 print:mb-4">
            <h3 class="text-xl font-bold text-white print:text-lg relative flex items-center group">
              <span class="flex items-center justify-center p-2 mr-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg shadow-blue-900/30 group-hover:shadow-blue-700/40 transition-all duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </span>
              Habilidades Técnicas
              <span class="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>

            <div class="hidden md:flex items-center space-x-2 print:hidden">
              <div class="flex items-center">
                <div class="w-4 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                <span class="text-xs text-gray-400">Básico</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-1.5 rounded-full bg-blue-400 mr-1.5"></div>
                <span class="text-xs text-gray-400">Intermediário</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-1.5 rounded-full bg-emerald-400 mr-1.5"></div>
                <span class="text-xs text-gray-400">Avançado</span>
              </div>
              <div class="flex items-center">
                <div class="w-4 h-1.5 rounded-full bg-emerald-500 mr-1.5"></div>
                <span class="text-xs text-gray-400">Especialista</span>
              </div>
            </div>
          </div>

          <!-- Skill Pills -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 print:gap-4">
            <div
              v-for="(category, categoryIndex) in skillCategories"
              :key="category.name"
              class="flex flex-col transform transition-all duration-500"
            >
              <!-- Category Header -->
              <div class="flex items-center mb-4 print:mb-2 group">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 shadow-inner mr-3 group-hover:border-blue-500/40 group-hover:shadow-blue-600/20 transition-all duration-300 print:w-10 print:h-10">
                  <component
                    :is="getCategoryIcon(category.name)"
                    class="w-6 h-6 transition-all duration-300 transform group-hover:scale-110 print:w-5 print:h-5"
                  />
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white print:text-base flex items-center group-hover:text-blue-400 transition-colors duration-300">
                    {{ category.name }}
                    <svg
                      class="ml-2 w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clip-rule="evenodd" />
                    </svg>
                  </h4>
                  <p class="text-xs text-gray-400 max-w-[200px] truncate print:hidden">
                    {{ getCategorySlogan(category.name) }}
                  </p>
                </div>
              </div>

              <!-- Skills Card -->
              <div
                class="space-y-5 print:space-y-3 flex-grow bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-600/30 transition-all duration-300 shadow-lg hover:shadow-blue-900/20 group relative overflow-hidden print:p-4 isolate"
              >
                <!-- Decorative Elements (static, no transform) -->
                <div class="absolute inset-0 opacity-10 print:hidden">
                  <div class="absolute right-0 top-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors duration-500"></div>
                  <div class="absolute left-0 bottom-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
                </div>

                <!-- Skills List -->
                <div
                  v-for="(skill, index) in category.skills"
                  :key="skill.name"
                  class="group/skill relative z-10"
                >
                  <!-- Skill Header -->
                  <div class="flex justify-between items-center mb-1.5">
                    <div class="flex items-center">
                      <!-- Skill Icon -->
                      <div class="mr-2 flex-shrink-0">
                        <component
                          :is="getSkillIcon(skill.name)"
                          class="w-4 h-4 text-blue-400 group-hover/skill:text-blue-300 transition-colors duration-200 will-change-auto"
                        />
                      </div>
                      <span class="text-sm font-medium text-white print:text-xs group-hover/skill:text-blue-400 transition-colors duration-200">
                        {{ skill.name }}
                      </span>
                      <span
                        v-if="skill.level >= 90"
                        class="ml-2 px-1.5 py-0.5 rounded text-[10px] font-medium text-emerald-900 bg-emerald-400/90 group-hover/skill:bg-emerald-400 transition-colors duration-300 hidden group-hover/skill:inline-flex items-center"
                      >
                        <svg class="w-2.5 h-2.5 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                        </svg>
                        TOP
                      </span>
                    </div>
                    <span
                      class="text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-200 print:text-[10px]"
                      :class="{
                        'text-emerald-300 bg-emerald-900/20': skill.level >= 90,
                        'text-emerald-200 bg-emerald-900/10': skill.level >= 80 && skill.level < 90,
                        'text-blue-200 bg-blue-900/10': skill.level >= 60 && skill.level < 80,
                        'text-blue-300 bg-blue-900/20': skill.level < 60
                      }"
                    >
                      {{ getSkillLevelText(skill.level) }}
                    </span>
                  </div>

                  <!-- Skill Progress Bar -->
                  <div class="relative">                      <div class="w-full bg-gray-700/50 rounded-full h-2 print:h-1 overflow-hidden">
                      <div
                        class="rounded-full h-full transition-all duration-1000 ease-out shadow-inner"
                        :class="getSkillLevelColorClass(skill.level)"
                        :style="{ width: skill.level + '%' }"
                      ></div>
                    </div>

                    <!-- Little Dots for Visual Interest -->
                    <div class="absolute top-0 left-0 w-full flex justify-between px-1 print:hidden">
                      <div
                        v-for="n in 5"
                        :key="n"
                        class="h-2 w-0.5 bg-gray-700/30"
                        :class="{ 'bg-white/20': (n * 20) <= skill.level }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Category Footer -->
              <div class="mt-4 text-center">
                <span class="inline-flex items-center text-xs bg-gray-800/80 text-gray-400 font-medium px-3 py-1 rounded-full print:text-[10px]">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
                  </svg>
                  {{ getCategorySlogan(category.name) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Skills & Additional Info -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 print:gap-4">
          <!-- Professional Skills -->
          <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-600/30 transition-all duration-300 shadow-lg print:shadow-none print:border print:border-gray-300 print:p-4 relative overflow-hidden group">
            <!-- Decorative Elements -->
            <div class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-emerald-600/5 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

            <!-- Decorative Pattern -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMEIyODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 print:hidden"></div>

            <h3 class="text-2xl font-bold text-white mb-8 flex items-center print:text-lg print:mb-4 relative z-10">
              <span class="flex items-center justify-center p-2.5 mr-3 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg shadow-lg shadow-emerald-900/30 group-hover:shadow-emerald-700/40 transition-all duration-300 group-hover:scale-105">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </span>
              <div>
                Competências Profissionais
                <div class="text-sm font-normal text-emerald-300/80 print:hidden">Habilidades interpessoais e de liderança</div>
                <span class="absolute -bottom-1 left-0 w-24 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></span>
              </div>
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-5 print:gap-2 relative z-10">
              <div
                v-for="(skill, index) in softSkills"
                :key="skill"
                class="bg-gradient-to-br from-gray-800/70 via-gray-800/80 to-gray-900/90 rounded-xl p-4 text-center hover:from-emerald-900/10 hover:to-gray-800/90 transition-all duration-500 border border-gray-700/50 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-600/10 print:p-2 print:hover:transform-none relative overflow-hidden group/skill"
                :class="{'hover:-translate-y-1 hover:scale-105': !isPrint}"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <!-- Animated Background Glow on Hover -->
                <div class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 print:hidden"></div>

                <!-- Skill Icon -->
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-emerald-900/20 group-hover/skill:shadow-emerald-600/30 transition-all duration-300 transform group-hover/skill:scale-110 print:w-7 print:h-7 print:rounded-full print:mb-1.5 relative z-10">
                  <component :is="getSoftSkillIcon(skill)" class="w-5 h-5 print:w-3.5 print:h-3.5" />
                </div>

                <!-- Skill Name -->
                <span class="text-sm font-medium text-emerald-100 group-hover/skill:text-white transition-colors duration-300 print:text-xs relative z-10">{{ skill }}</span>

                <!-- Decorative Line -->
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500/50 group-hover/skill:w-1/2 transition-all duration-300 print:hidden"></div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-8 print:gap-4">
            <!-- Languages -->
            <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-lg print:shadow-none print:border print:border-gray-300 print:p-4 relative overflow-hidden group">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <!-- Language Icons Background (Hidden in Print) -->
              <div class="absolute inset-0 flex items-center justify-center opacity-5 print:hidden">
                <div class="transform -rotate-12 text-6xl font-bold text-purple-500/20 select-none">PT</div>
                <div class="transform rotate-12 ml-16 text-6xl font-bold text-blue-500/20 select-none">EN</div>
              </div>

              <h3 class="text-xl font-bold text-white mb-6 flex items-center print:text-lg print:mb-3 relative z-10">
                <span class="flex items-center justify-center p-2.5 mr-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-lg shadow-purple-900/30 group-hover:shadow-purple-700/40 transition-all duration-300 group-hover:scale-105">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
                <div>
                  Idiomas
                  <div class="text-sm font-normal text-purple-300/80 print:hidden">Comunicação multilíngue</div>
                  <span class="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
                </div>
              </h3>

              <div class="space-y-6 print:space-y-2 relative z-10">
                <!-- Portuguese -->
                <div class="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30 hover:border-green-500/30 transition-all duration-300 group/pt">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white mr-4 shadow-lg shadow-green-900/20 group-hover/pt:shadow-green-700/30 transition-all duration-300 print:w-8 print:h-8 print:rounded-full">
                        <span class="font-bold text-lg print:text-base">PT</span>
                      </div>
                    </div>
                    <div class="flex-grow">
                      <div class="flex justify-between items-center mb-2">
                        <span class="font-medium text-white print:text-sm group-hover/pt:text-green-300 transition-colors duration-300">Português</span>
                        <span class="text-xs font-bold bg-green-200 text-green-800 px-2.5 py-0.5 rounded-full print:text-[10px]">Nativo</span>
                      </div>
                      <div class="w-full bg-gray-700/50 rounded-full h-2 print:h-1 overflow-hidden">
                        <div class="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full relative overflow-hidden">
                        </div>
                      </div>

                      <!-- Skill Detail (Visible on Hover) -->
                      <div class="hidden md:flex pt-2 opacity-0 max-h-0 overflow-hidden group-hover/pt:opacity-100 group-hover/pt:max-h-20 transition-all duration-500 print:hidden">
                        <div class="flex space-x-4 text-xs text-gray-300">
                          <div class="flex flex-col items-center">
                            <span class="text-green-400 font-medium mb-1">Leitura</span>
                            <div class="flex space-x-1">
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div class="flex flex-col items-center">
                            <span class="text-green-400 font-medium mb-1">Escrita</span>
                            <div class="flex space-x-1">
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div class="flex flex-col items-center">
                            <span class="text-green-400 font-medium mb-1">Conversação</span>
                            <div class="flex space-x-1">
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- English -->
                <div class="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 group/en">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mr-4 shadow-lg shadow-blue-900/20 group-hover/en:shadow-blue-700/30 transition-all duration-300 print:w-8 print:h-8 print:rounded-full">
                        <span class="font-bold text-lg print:text-base">EN</span>
                      </div>
                    </div>
                    <div class="flex-grow">
                      <div class="flex justify-between items-center mb-2">
                        <span class="font-medium text-white print:text-sm group-hover/en:text-blue-300 transition-colors duration-300">Inglês</span>
                        <span class="text-xs font-bold bg-blue-200 text-blue-800 px-2.5 py-0.5 rounded-full print:text-[10px]">Intermediário</span>
                      </div>
                      <div class="w-full bg-gray-700/50 rounded-full h-2 print:h-1">
                        <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style="width: 70%"></div>
                      </div>

                      <!-- Skill Detail (Visible on Hover) -->
                      <div class="hidden md:flex pt-2 opacity-0 max-h-0 overflow-hidden group-hover/en:opacity-100 group-hover/en:max-h-20 transition-all duration-500 print:hidden">
                        <div class="flex space-x-4 text-xs text-gray-300">
                          <div class="flex flex-col items-center">
                            <span class="text-blue-400 font-medium mb-1">Leitura</span>
                            <div class="flex space-x-1">
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            </div>
                          </div>
                          <div class="flex flex-col items-center">
                            <span class="text-blue-400 font-medium mb-1">Escrita</span>
                            <div class="flex space-x-1">
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            </div>
                          </div>
                          <div class="flex flex-col items-center">
                            <span class="text-blue-400 font-medium mb-1">Conversação</span>
                            <div class="flex space-x-1">
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <div class="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools & Software -->
            <div class="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 shadow-lg print:shadow-none print:border print:border-gray-300 print:p-4 relative overflow-hidden group">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-0 left-0 -mb-12 -ml-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <!-- Floating Tool Icons (Hidden in Print) -->
              <div class="absolute inset-0 flex justify-center items-center print:hidden">
                <svg class="w-24 h-24 text-amber-900/5 transform rotate-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>

              <h3 class="text-xl font-bold text-white mb-6 flex items-center print:text-lg print:mb-3 relative z-10">
                <span class="flex items-center justify-center p-2.5 mr-3 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-lg shadow-amber-900/30 group-hover:shadow-amber-700/40 transition-all duration-300 group-hover:scale-105">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </span>
                <div>
                  Ferramentas & Software
                  <div class="text-sm font-normal text-amber-300/80 print:hidden">Tecnologias complementares</div>
                  <span class="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></span>
                </div>
              </h3>

              <div class="flex flex-wrap gap-3 print:gap-1.5 relative z-10">
                <div
                  v-for="(tool, index) in tools"
                  :key="tool"
                  class="group/tool relative bg-gradient-to-br from-gray-800/80 via-gray-800/90 to-gray-900/80 text-sm py-2 px-4 rounded-lg text-gray-300 border border-gray-700/50 hover:border-amber-500/40 hover:text-amber-200 hover:shadow-lg hover:shadow-amber-900/10 transition-all duration-300 print:text-xs print:py-1 print:px-2 cursor-pointer"
                  :style="{ 'animation-delay': (index * 0.05) + 's' }"
                >
                  <span class="flex items-center">
                    <!-- Tool Icon with Glow Effect -->
                    <span class="relative">
                      <svg class="w-4 h-4 mr-2 text-amber-500 transition-all duration-300 group-hover/tool:text-amber-400 group-hover/tool:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="absolute -inset-1 bg-amber-500/20 rounded-full blur-md opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300 print:hidden"></span>
                    </span>

                    <!-- Tool Name -->
                    <span class="font-medium group-hover/tool:font-semibold transition-all duration-300">{{ tool }}</span>

                    <!-- Animated Checkmark on Hover (Hidden in Print) -->
                    <svg
                      class="w-0 h-0 ml-0 opacity-0 group-hover/tool:w-4 group-hover/tool:h-4 group-hover/tool:ml-1.5 group-hover/tool:opacity-100 text-amber-400 transition-all duration-300 print:hidden"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>

                  <!-- Bottom Border Animation on Hover -->
                  <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-500 group-hover/tool:w-4/5 transition-all duration-300 print:hidden"></span>
                </div>
              </div>

              <!-- Extra Information for Screen Readers Only -->
              <p class="sr-only">
                Ferramentas e programas que utilizo no dia a dia para desenvolvimento web e design de interfaces.
              </p>
            </div>
          </div>
        </div>

        <!-- Skills Summary / Impact -->
        <div class="mt-16 print:mt-6">
          <div class="bg-gradient-to-r from-blue-900/30 via-gray-900/80 to-emerald-900/30 rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden group hover:border-blue-600/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-500 print:p-4 print:border print:border-gray-300">
            <!-- Background Pattern & Glow Effects -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 print:hidden"></div>

            <!-- Decorative Blurs -->
            <div class="absolute top-0 right-0 -mt-16 -mr-16 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl opacity-70 group-hover:bg-blue-600/15 group-hover:w-64 group-hover:h-64 transition-all duration-700 print:hidden"></div>
            <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl opacity-70 group-hover:bg-emerald-600/15 group-hover:w-64 group-hover:h-64 transition-all duration-700 print:hidden"></div>

            <!-- Header with Decorative Elements -->
            <div class="flex flex-col mb-8 print:mb-4 relative z-10">
              <div class="hidden sm:flex items-center gap-3 justify-center mb-2 print:hidden">
                <div class="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/50"></div>
                <div class="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-xs font-medium text-blue-400">
                  Valor Agregado
                </div>
                <div class="h-px w-16 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
              </div>

              <h3 class="text-2xl font-bold text-center mb-2 print:text-lg print:mb-3 relative z-10">
                <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                  Impacto das Minhas Habilidades
                </span>
              </h3>

              <p class="text-center text-gray-400 text-sm max-w-2xl mx-auto print:hidden">
                Resultados concretos que minhas competências e experiência trazem para projetos e negócios
              </p>
            </div>

            <!-- Impact Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-3 relative z-10">
              <!-- Efficiency Impact Card -->
              <div class="group/card bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 print:p-3 overflow-hidden relative">
                <!-- Card Glow Effect on Hover -->
                <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 print:hidden"></div>

                <!-- Icon with Colored Background -->
                <div class="bg-blue-900/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-blue-700/30 group-hover/card:scale-110 group-hover/card:shadow-lg group-hover/card:shadow-blue-900/20 transition-all duration-300 print:w-9 print:h-9 print:mb-2">
                  <svg class="w-6 h-6 text-blue-400 group-hover/card:text-blue-300 transition-colors duration-300 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <!-- Content -->
                <h4 class="font-semibold text-white text-lg mb-2 group-hover/card:text-blue-300 transition-colors duration-300 print:text-base">Desenvolvimento Eficiente</h4>
                <p class="text-sm text-gray-300 print:text-xs">
                  Código limpo e otimizado que reduz o tempo de desenvolvimento em até <span class="text-blue-400 font-medium">40%</span> sem comprometer a qualidade.
                </p>

                <!-- Metrics (Visible on Hover) -->
                <div class="mt-3 pt-3 border-t border-gray-700/30 opacity-0 max-h-0 overflow-hidden group-hover/card:opacity-100 group-hover/card:max-h-20 transition-all duration-300 print:hidden">
                  <div class="flex items-center justify-between text-xs text-gray-400">
                    <span>Performance</span>
                    <div class="w-24 bg-gray-700/50 rounded-full h-1">
                      <div class="bg-blue-500 h-full rounded-full" style="width: 95%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Reliability Impact Card -->
              <div class="group/card bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 print:p-3 overflow-hidden relative">
                <!-- Card Glow Effect on Hover -->
                <div class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 print:hidden"></div>

                <!-- Icon with Colored Background -->
                <div class="bg-emerald-900/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-emerald-700/30 group-hover/card:scale-110 group-hover/card:shadow-lg group-hover/card:shadow-emerald-900/20 transition-all duration-300 print:w-9 print:h-9 print:mb-2">
                  <svg class="w-6 h-6 text-emerald-400 group-hover/card:text-emerald-300 transition-colors duration-300 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <!-- Content -->
                <h4 class="font-semibold text-white text-lg mb-2 group-hover/card:text-emerald-300 transition-colors duration-300 print:text-base">Soluções Confiáveis</h4>
                <p class="text-sm text-gray-300 print:text-xs">
                  Aplicações robustas e seguras com <span class="text-emerald-400 font-medium">99.5%</span> de tempo de atividade e monitoramento contínuo.
                </p>

                <!-- Metrics (Visible on Hover) -->
                <div class="mt-3 pt-3 border-t border-gray-700/30 opacity-0 max-h-0 overflow-hidden group-hover/card:opacity-100 group-hover/card:max-h-20 transition-all duration-300 print:hidden">
                  <div class="flex items-center justify-between text-xs text-gray-400">
                    <span>Confiabilidade</span>
                    <div class="w-24 bg-gray-700/50 rounded-full h-1">
                      <div class="bg-emerald-500 h-full rounded-full" style="width: 99.5%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ROI Impact Card -->
              <div class="group/card bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 print:p-3 overflow-hidden relative">
                <!-- Card Glow Effect on Hover -->
                <div class="absolute inset-0 bg-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 print:hidden"></div>

                <!-- Icon with Colored Background -->
                <div class="bg-purple-900/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-purple-700/30 group-hover/card:scale-110 group-hover/card:shadow-lg group-hover/card:shadow-purple-900/20 transition-all duration-300 print:w-9 print:h-9 print:mb-2">
                  <svg class="w-6 h-6 text-purple-400 group-hover/card:text-purple-300 transition-colors duration-300 print:w-4 print:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <!-- Content -->
                <h4 class="font-semibold text-white text-lg mb-2 group-hover/card:text-purple-300 transition-colors duration-300 print:text-base">ROI Mensurável</h4>
                <p class="text-sm text-gray-300 print:text-xs">
                  Projetos que geram <span class="text-purple-400 font-medium">retorno sobre investimento</span> rápido, com aumento médio de <span class="text-purple-400 font-medium">40%</span> na taxa de conversão.
                </p>

                <!-- Metrics (Visible on Hover) -->
                <div class="mt-3 pt-3 border-t border-gray-700/30 opacity-0 max-h-0 overflow-hidden group-hover/card:opacity-100 group-hover/card:max-h-20 transition-all duration-300 print:hidden">
                  <div class="flex items-center justify-between text-xs text-gray-400">
                    <span>Impacto</span>
                    <div class="w-24 bg-gray-700/50 rounded-full h-1">
                      <div class="bg-purple-500 h-full rounded-full" style="width: 90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Testimonial Quote (Hidden in Print) -->
            <div class="mt-6 text-center hidden md:block print:hidden">
              <p class="text-gray-400 italic text-sm">
                "O valor não está apenas no que você sabe fazer, mas no impacto que suas habilidades geram no negócio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgrammingParticles from '../ui/ProgrammingParticles.vue'
import AdvancedCodeParticles from '../ui/AdvancedCodeParticles.vue'
import AnimatedBackground from '../ui/AnimatedBackground.vue'

export default {
  name: 'SkillsSection',
  components: {
    ProgrammingParticles,
    AdvancedCodeParticles,
    AnimatedBackground
  },
  props: {
    technicalSkills: {
      type: Array,
      required: true
    },
    softSkills: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // Corrigir posicionamento entre seções
    this.$nextTick(() => {
      // Pequeno ajuste de margem para evitar sobreposições
      const skillsSection = document.getElementById('skills-section');
      if (skillsSection) {
        const previousSection = skillsSection.previousElementSibling;
        if (previousSection) {
          previousSection.style.marginBottom = '2rem';
        }
      }

      // Desabilitar animações ao imprimir
      window.addEventListener('beforeprint', this.disableAnimations);
      window.addEventListener('afterprint', this.enableAnimations);
    });
  },
  beforeUnmount() {
    // Remover event listeners ao desmontar o componente
    window.removeEventListener('beforeprint', this.disableAnimations);
    window.removeEventListener('afterprint', this.enableAnimations);
  },
  methods: {
    disableAnimations() {
      document.documentElement.classList.add('print-mode');
    },
    enableAnimations() {
      document.documentElement.classList.remove('print-mode');
    },
    // Retorna o ícone adequado para cada categoria de habilidade
    getCategoryIcon(category) {
      const icons = {
        'Frontend': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12l-4-4m0 8l4-4" />
          </svg>`
        },
        'Backend': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8h10M7 16h6" />
          </svg>`
        },
        'Database': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            <circle cx="12" cy="7" r="1" fill="currentColor" />
          </svg>`
        },
        'Tools': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>`
        },
        'CMS': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            <rect x="8" y="14" width="8" height="2" rx="1" fill="currentColor" opacity="0.5" />
          </svg>`
        },
        'Marketing': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            <circle cx="18" cy="10" r="1" fill="currentColor" />
          </svg>`
        },
        'Design': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
            <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
          </svg>`
        }
      }

      return icons[category] || {
        template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>`
      }
    },
    // ... (demais métodos já presentes)
  },
  computed: {
    skillCategories() {
      const categories = {}

      this.technicalSkills.forEach(skill => {
        if (!categories[skill.category]) {
          categories[skill.category] = {
            name: skill.category,
            skills: []
          }
        }
        categories[skill.category].skills.push(skill)
      })

      return Object.values(categories)
    },

    tools() {
      return [
        'VS Code',
        'Git & GitHub',
        'Figma',
        'Photoshop',
        'Chrome DevTools',
        'Postman',
        'Docker',
        'Vercel',
        'Netlify',
        'Linux',
        'WordPress',
        'MySQL Workbench'
      ]
    },
    isPrint() {
      // Detecta se está no modo de impressão
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print').matches
    }
  },
  methods: {
    // Retorna o ícone adequado para cada categoria de habilidade
    getCategoryIcon(category) {
      const icons = {
        'Frontend': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12l-4-4m0 8l4-4" />
          </svg>`
        },
        'Backend': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8h10M7 16h6" />
          </svg>`
        },
        'Database': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            <circle cx="12" cy="7" r="1" fill="currentColor" />
          </svg>`
        },
        'Tools': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>`
        },
        'CMS': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            <rect x="8" y="14" width="8" height="2" rx="1" fill="currentColor" opacity="0.5" />
          </svg>`
        },
        'Marketing': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            <circle cx="18" cy="10" r="1" fill="currentColor" />
          </svg>`
        },
        'Design': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
            <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
          </svg>`
        }
      }

      return icons[category] || {
        template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>`
      }
    },

    // Retorna o ícone para cada soft skill
    getSoftSkillIcon(skill) {
      const icons = {
        'Liderança de Equipes': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>`
        },
        'Comunicação Eficaz': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>`
        },
        'Resolução de Problemas': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>`
        },
        'Pensamento Crítico': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>`
        },
        'Adaptabilidade': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>`
        },
        'Gestão de Tempo': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`
        },
        'Trabalho em Equipe': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>`
        },
        'Criatividade e Inovação': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`
        },
        'Orientação a Resultados': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>`
        },
        'Aprendizado Contínuo': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>`
        }
      }

      return icons[skill] || {
        template: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>`
      }
    },

    // Retorna o texto que descreve o nível de habilidade
    getSkillLevelText(level) {
      if (level >= 90) return 'Especialista'
      if (level >= 80) return 'Avançado'
      if (level >= 60) return 'Intermediário'
      return 'Básico'
    },

    // Retorna a classe CSS correspondente ao nível de habilidade para a cor da barra de progresso
    getSkillLevelColorClass(level) {
      if (level >= 90) return 'bg-gradient-to-r from-emerald-500 to-emerald-600'
      if (level >= 80) return 'bg-gradient-to-r from-emerald-400 to-emerald-500'
      if (level >= 60) return 'bg-gradient-to-r from-blue-400 to-blue-500'
      return 'bg-gradient-to-r from-blue-500 to-blue-600'
    },

    // Retorna o slogan/tag para cada categoria
    getCategorySlogan(category) {
      const slogans = {
        'Frontend': 'Criando interfaces impressionantes e intuitivas',
        'Backend': 'Construindo alicerces sólidos e escaláveis',
        'Database': 'Gerenciando dados com eficiência e segurança',
        'CMS': 'Soluções completas para gerenciamento de conteúdo',
        'Tools': 'Dominando ferramentas para maior produtividade',
        'Marketing': 'Atraindo e convertendo o público-alvo',
        'Design': 'Combinando estética e funcionalidade'
      }

      return slogans[category] || 'Competências técnicas diversificadas'
    },

    // Retorna ícones específicos para cada habilidade técnica
    getSkillIcon(skillName) {
      const icons = {
        'JavaScript/TypeScript': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
          </svg>`
        },
        'Vue.js': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/>
          </svg>`
        },
        'React': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.4 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
          </svg>`
        },
        'HTML5/CSS3': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
            <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
          </svg>`
        },
        'Tailwind CSS': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>`
        },
        'Node.js': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
          </svg>`
        },
        'PHP': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
            <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"/>
          </svg>`
        },
        'MySQL/PostgreSQL': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
          </svg>`
        },
        'WordPress': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"/>
          </svg>`
        },
        'Git/GitHub': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
          </svg>`
        },
        'SEO': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>`
        },
        'Figma/Design': {
          template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
            <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"/>
          </svg>`
        }
      }

      return icons[skillName] || {
        template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"/>
        </svg>`
      };
    }
  }
};
</script>

<style scoped>
/* Animações para elementos decorativos - desativadas para evitar problemas */
@keyframes float-slow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes float-slow-reverse {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.5;
  }
}

/* Aplicação das animações aos elementos */
.animate-float-slow {
  animation: none;
}

.animate-float-slow-reverse {
  animation: none;
}

.animate-pulse-slow {
  animation: none;
}

/* Removed problematic shimmer animation */

/* Pausar animações durante interação com toque (em dispositivos móveis) */
@media (hover: none) {
  .animate-float-slow,
  .animate-float-slow-reverse,
  .animate-pulse-slow,
  .animate-shimmer {
    animation-play-state: paused;
  }
}

/* Respeitar preferência do usuário para movimento reduzido */
@media (prefers-reduced-motion) {
  .animate-float-slow,
  .animate-float-slow-reverse,
  .animate-pulse-slow,
  .animate-shimmer {
    animation: none !important;
    transform: none !important;
  }
}

/* Efeito de fade-in para os elementos da habilidade ao carregar a página */
.group\/skill, .group\/tool, .group\/card {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efeito de entrada escalonada para os elementos */
.group\/skill:nth-child(1) { animation-delay: 0.1s; }
.group\/skill:nth-child(2) { animation-delay: 0.2s; }
.group\/skill:nth-child(3) { animation-delay: 0.3s; }
.group\/skill:nth-child(4) { animation-delay: 0.4s; }
.group\/skill:nth-child(5) { animation-delay: 0.5s; }
.group\/skill:nth-child(6) { animation-delay: 0.6s; }

/* Estilos específicos para a versão impressa */
@media print {
  .group\/skill, .group\/tool, .group\/card {
    animation: none !important;
    opacity: 1 !important;
  }
}

/* Garantir que animações fiquem dentro dos contêineres */
.overflow-hidden {
  overflow: hidden;
}

/* Isolamento para limitar efeitos visuais dentro dos contêineres */
.isolate {
  isolation: isolate;
}

/* Melhorar renderização de ícones SVG */
svg {
  shape-rendering: geometricPrecision;
  text-rendering: optimizeLegibility;
}

/* Adicionar regras para ajudar no posicionamento entre seções */
:root {
  scroll-padding-top: 1rem;
}

/* Ajustes para modo de impressão */
@media print {
  .print-mode #skills-section {
    page-break-inside: avoid;
  }

  .print-mode .page-break {
    page-break-after: always;
  }
}

/* Melhorar espaçamento entre seções */
#skills-section {
  margin-top: 2rem;
  padding-top: 4rem;
  padding-bottom: 6rem;
}

/* Desabilitar GPU aceleração em dispositivos de baixo desempenho */
@media (max-width: 640px) {
  .will-change-auto {
    will-change: auto;
  }
}
</style>
