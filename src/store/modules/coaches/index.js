import mutations from './mutations'
import actions from './actions'
import getters from './getters'


export default {
   namespaced: true,
   state() {
      return {
         lastFetch: null,
         coaches: [
            {
               id: 'c1',
               firstName: 'Javid',
               lastName: 'Huseynov',
               areas: ['frontend'],
               description:
                  "I'm Javid and I've worked as a freelance web developer for 0 years. Let me help you become a developer as well!",
               hourlyRate: 'food'
            },
            {
               id: 'c2',
               firstName: 'Giga',
               lastName: 'Chad',
               areas: ['frontend', 'backend', 'cooking'],
               description:
                  'I am Giga Chad and as a god developer in a big tech company, I can help you get your first job or progress in your current role.',
               hourlyRate: 30
            }
         ]
      };
   },
   mutations,
   actions,
   getters
}