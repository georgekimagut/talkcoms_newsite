`
<!-- offices -->
            <div class="w-full flex flex-wrap mt-4">
              <div class="w-full flex flex-nowrap">
                <div
                  class="w-[30px] min-w-[e0px] h-[30px] max-h-[30px] flex justify-center p-4 rounded-sm bg-secondary"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-envelope text-white"></i>
                  </div>
                </div>
                <!-- title -->
                <div class="w-full ml-4 h-full flex flex-col justify-end">
                  <h1 class="font-semibold">Offices</h1>
                </div>
              </div>

              <!-- emails -->
              <div class="w-full mt-4">
                <div
                  v-for="(office, index) in offices"
                  :key="index"
                  class="w-full"
                >
                  <p class="font-semibold">{{ office.name }}</p>
                  <p class="mb-2">{{ office.location }}</p>
                </div>
              </div>
            </div>
            <!-- phone -->
            <div class="w-1/2 flex flex-wrap mt-10">
              <div class="w-full flex flex-nowrap">
                <div
                  class="w-[30px] min-w-[e0px] h-[30px] max-h-[30px] flex justify-center p-4 rounded-sm bg-secondary"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-phone text-white"></i>
                  </div>
                </div>
                <!-- title -->
                <div class="w-full ml-4 h-full flex flex-col justify-end">
                  <h1 class="font-semibold">Phone</h1>
                </div>
              </div>

              <!-- phone -->
              <div class="w-full mt-4">
                <p
                  v-for="(phone, index) in phones"
                  :key="index"
                  class="text-sm"
                >
                  <a :href="tel:${phone.phone}" class="custom-default-hover">
                    {{ phone.phone }}
                  </a>
                </p>
              </div>
            </div>
            <!-- emails -->
            <div class="w-1/2 flex flex-wrap mt-10">
              <div class="w-full flex flex-nowrap">
                <div
                  class="w-[30px] min-w-[e0px] h-[30px] max-h-[30px] flex justify-center p-4 rounded-sm bg-secondary"
                >
                  <div class="h-full flex flex-col justify-center">
                    <i class="fa-solid fa-envelope text-white"></i>
                  </div>
                </div>
                <!-- title -->
                <div class="w-full ml-4 h-full flex flex-col justify-end">
                  <h1 class="font-semibold">Email</h1>
                </div>
              </div>

              <!-- emails -->
              <div class="w-full mt-4">
                <p v-for="(email, index) in emails" :key="index">
                  <a
                    :href="mailto:${email.email}"
                    class="custom-default-hover"
                  >
                    {{ email.email }}
                  </a>
                </p>
              </div>
            </div>
`;
