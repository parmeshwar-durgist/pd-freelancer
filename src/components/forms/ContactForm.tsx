import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Mail,
  Phone,
  Sparkles,
  Clock,
  Briefcase
} from 'lucide-react';
import { servicesData } from '../../data/services';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phoneOrWhatsApp: z.string().optional(),
  serviceRequired: z.string().min(1, 'Please select the service you need'),
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().min(1, 'Please select your desired timeline'),
  preferredContact: z.enum(['Email', 'WhatsApp', 'Phone']),
  projectBrief: z.string().min(15, 'Please provide at least a brief summary of what you want to build (15+ chars)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const preselectedService = searchParams.get('service') || '';
  const preselectedPackage = searchParams.get('package') || '';

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      phoneOrWhatsApp: '',
      serviceRequired: preselectedService || (preselectedPackage ? `Package: ${preselectedPackage}` : ''),
      projectType: 'New Project',
      timeline: 'Standard (2 - 4 Weeks)',
      preferredContact: 'Email',
      projectBrief: '',
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue('serviceRequired', preselectedService);
    } else if (preselectedPackage) {
      setValue('serviceRequired', `Package: ${preselectedPackage}`);
    }
  }, [preselectedService, preselectedPackage, setValue]);

  const directEmail = import.meta.env.VITE_CONTACT_EMAIL || 'pd.softwaredeveloper@gmail.com';
  const directPhone = import.meta.env.VITE_MOBILE_NUMBER || '9657847967';
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919657847967';
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '52cd25c0-5201-4125-b6bb-b1382dc69fbc';

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setErrorMessage('');

    try {
      // Dispatching via Web3Forms API directly to pd.softwaredeveloper@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `New Project Inquiry from ${data.fullName} - PD Freelancer`,
          from_name: 'PD Freelancer Website',
          name: data.fullName,
          email: data.email,
          phone: data.phoneOrWhatsApp || 'Not provided',
          company: data.company || 'Not provided',
          service_required: data.serviceRequired,
          project_nature: data.projectType,
          desired_timeline: data.timeline,
          preferred_response: data.preferredContact,
          message: data.projectBrief,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'Submission failed. Please try again or reach out on WhatsApp.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmissionStatus('error');
      setErrorMessage(
        err?.message || 'There was an issue sending your inquiry. Please reach out directly on WhatsApp or call +91 9657847967.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <div className="rounded-3xl glass-card p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      {/* Direct Contact Bar */}
      <div className="mb-8 p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
            <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>{directEmail}</span>
            <button
              onClick={copyEmail}
              className="p-1 rounded-md hover:bg-brand-500/20 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Copy Email"
            >
              {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
            <Phone className="w-4 h-4 text-emerald-500" />
            <a href={`tel:${directPhone}`} className="hover:underline">
              +91 {directPhone}
            </a>
          </div>
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Parmeshwar,%20I'm%20reaching%20out%20from%20your%20website%20to%20discuss%20a%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Quick WhatsApp</span>
        </a>
      </div>

      {/* Success Notification */}
      {submissionStatus === 'success' && (
        <div className="mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 space-y-2 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <h4 className="font-bold text-sm sm:text-base">Inquiry Successfully Sent!</h4>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed pl-7">
            Thank you for reaching out! Your project brief has been forwarded directly to Parmeshwar Durgist at <strong>{directEmail}</strong>. You will receive a response within 24 business hours.
          </p>
        </div>
      )}

      {/* Error Notification */}
      {submissionStatus === 'error' && (
        <div className="mb-8 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 space-y-1">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
            <h4 className="font-bold text-sm">Failed to send inquiry</h4>
          </div>
          <p className="text-xs text-rose-600 dark:text-rose-400 pl-7">{errorMessage}</p>
        </div>
      )}

      {/* Main Interactive Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-5">
          {/* Row 1: Full Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rahul Sharma or Sarah Jenkins"
                {...register('fullName')}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border ${
                  errors.fullName ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                } focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-500">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                {...register('email')}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border ${
                  errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                } focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Company and Phone/WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Business / Company Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="e.g. Nexus Innovations Ltd"
                {...register('company')}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="phoneOrWhatsApp" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Phone / WhatsApp Number <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="phoneOrWhatsApp"
                type="tel"
                placeholder="+91 98765 43210"
                {...register('phoneOrWhatsApp')}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Row 3: Service Required & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Primary Service Required <span className="text-rose-500">*</span>
              </label>
              <select
                id="serviceRequired"
                {...register('serviceRequired')}
                className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border ${
                  errors.serviceRequired ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                } focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white`}
              >
                <option value="">Select a service...</option>
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Landing Page Package">Package: High-Impact Landing Page</option>
                <option value="Corporate Business Package">Package: Corporate Business Website</option>
                <option value="E-commerce Store Package">Package: E-commerce Digital Store</option>
                <option value="Custom Web App Architecture">Package: Custom Full-Stack Web App</option>
                <option value="Other / Custom Inquiry">Other / Custom Technical Solution</option>
              </select>
              {errors.serviceRequired && (
                <p className="mt-1 text-xs text-rose-500">{errors.serviceRequired.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Project Nature <span className="text-rose-500">*</span>
              </label>
              <select
                id="projectType"
                {...register('projectType')}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
              >
                <option value="New Project">New Project from Scratch</option>
                <option value="Redesign / Modernization">Redesign / Code Modernization</option>
                <option value="API or Feature Integration">Third-Party API or Feature Integration</option>
                <option value="Bug Fixes & Maintenance">Bug Troubleshooting & Maintenance</option>
              </select>
            </div>
          </div>

          {/* Row 4: Timeline & Preferred Response Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="timeline" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Desired Timeline <span className="text-rose-500">*</span>
              </label>
              <select
                id="timeline"
                {...register('timeline')}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
              >
                <option value="Urgent (< 2 Weeks)">Urgent (&lt; 2 Weeks)</option>
                <option value="Standard (2 - 4 Weeks)">Standard (2 - 4 Weeks)</option>
                <option value="Flexible (1 - 2 Months)">Flexible (1 - 2 Months)</option>
                <option value="Long-term / Retainer">Ongoing Development / Retainer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Preferred Response Method
              </label>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm pt-2">
                {(['Email', 'WhatsApp', 'Phone'] as const).map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300"
                  >
                    <input
                      type="radio"
                      value={method}
                      {...register('preferredContact')}
                      className="text-brand-600 focus:ring-brand-500"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Row 5: Detailed Project Brief */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="projectBrief" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Project Overview & Requirements <span className="text-rose-500">*</span>
              </label>
              <span className="text-[11px] text-slate-400">Min 15 characters</span>
            </div>
            <textarea
              id="projectBrief"
              rows={4}
              placeholder="Tell me about your product vision, key features, target audience, or current technical challenges..."
              {...register('projectBrief')}
              className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-slate-900/80 border ${
                errors.projectBrief ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
              } focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white leading-relaxed`}
            />
            {errors.projectBrief && (
              <p className="mt-1 text-xs text-rose-500">{errors.projectBrief.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Forwarding to Parmeshwar...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Project Brief & Request Proposal</span>
              </>
            )}
          </button>
        </div>

        {/* Form Privacy Note */}
        <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 leading-normal">
          Strict confidentiality guaranteed. Your contact details and project ideas will never be shared. Directly received by Parmeshwar Durgist.
        </p>
      </form>
    </div>
  );
};
