'use server';

import { z } from 'zod';

const AiTriageInputSchema = z.object({
  query: z.string().describe('The user query or symptoms description.'),
});
export type AiTriageInput = z.infer<typeof AiTriageInputSchema>;

const AiTriageOutputSchema = z.object({
  response: z.string().describe('The AI chatbot response to the user query.'),
});
export type AiTriageOutput = z.infer<typeof AiTriageOutputSchema>;

export async function simpleAiTriage(input: AiTriageInput): Promise<AiTriageOutput> {
  const { query } = input;
  
  // Simple keyword-based triage system
  const lowerQuery = query.toLowerCase();
  
  let response = '';
  
  // Check for specific symptoms and provide department recommendations
  if (lowerQuery.includes('heart') || lowerQuery.includes('chest pain') || lowerQuery.includes('cardiac')) {
    response = `Based on your symptoms, I recommend visiting our Cardiology department. Our cardiologists specialize in heart-related conditions and can provide comprehensive cardiac care. Please book an appointment through our website or contact us for urgent care.`;
  } else if (lowerQuery.includes('child') || lowerQuery.includes('baby') || lowerQuery.includes('pediatric')) {
    response = `For pediatric care, I recommend our Pediatrics department. Our pediatricians are experienced in caring for children of all ages, from infants to adolescents. They provide comprehensive healthcare with a family-centered approach.`;
  } else if (lowerQuery.includes('bone') || lowerQuery.includes('joint') || lowerQuery.includes('fracture') || lowerQuery.includes('sports injury')) {
    response = `For musculoskeletal issues, I recommend our Orthopedics department. Our orthopedic specialists can help with bone, joint, and muscle problems, including sports injuries and joint replacements.`;
  } else if (lowerQuery.includes('appointment') || lowerQuery.includes('book') || lowerQuery.includes('schedule')) {
    response = `You can easily book an appointment through our website. Visit the "Book Appointment" page where you can select your preferred department, doctor, and appointment time. Our team will confirm your booking via email.`;
  } else if (lowerQuery.includes('emergency') || lowerQuery.includes('urgent')) {
    response = `For medical emergencies, please proceed to our Emergency Department which is open 24/7, or call our emergency hotline at +211 915 656 562. Do not wait to book an appointment for urgent medical needs.`;
  } else if (lowerQuery.includes('department') || lowerQuery.includes('specialist')) {
    response = `Nile King's Special Hospital offers three main departments:
    - Cardiology: For heart and vascular conditions
    - Pediatrics: For children's healthcare
    - Orthopedics: For bone, joint, and muscle issues
    
    Please describe your symptoms so I can recommend the most appropriate department for your needs.`;
  } else {
    response = `Thank you for contacting Nile King's Special Hospital. I'm here to help you find the right department and provide information about our services. Could you please describe your symptoms or what you're looking for so I can better assist you?`;
  }
  
  return { response };
}
