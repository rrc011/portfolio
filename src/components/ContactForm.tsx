import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner, FaTimes } from 'react-icons/fa';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

type Props = {
  setShowModal: (show: boolean) => void;
};

const formSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Min 3 charater').max(50, 'Max 50 character').required('The name is required'),
  email: Yup.string().email('The email is not valid').required('The email is required'),
  message: Yup.string().min(10, 'Min 10 character').max(500, 'Max 500 character').required('The message is required'),
});

export const ContactForm: FC<Props> = ({ setShowModal }) => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values, { setStatus, resetForm, setSubmitting }) => {
      setSubmitting(true);
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const public_key = import.meta.env.VITE_PUBLIC_KEY;
      if (!serviceId || !templateId || !public_key) throw new Error('Emailjs not configured');
      const result: EmailJSResponseStatus | void = await emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: values.email,
            to_name: values.name,
            message: values.message,
          },
          public_key,
        )
        .catch((error) => {
          console.error(error);
          setHasError(true);
          setStatus('Error sending email');
        })
        .finally(() => setSubmitting(false));

      if (result && result.status === 200) {
        resetForm();
        setStatus('Email sent successfully!!!');
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      }
    },
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-black/35">{t('ContactForm.Title')}</h3>
              <button
                disabled={form.isSubmitting}
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              {form.status && (
                <div
                  className={clsx('p-3 mb-3 rounded-md  border-spacing-1', {
                    'bg-blue-400 border-blue-600': !hasError,
                    'bg-red-400 border-red-600': hasError,
                  })}
                >
                  <div className="text-white font-semibold">{form.status}</div>
                </div>
              )}
              <form autoComplete="off" noValidate ref={formRef}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    {t('ContactForm.Name')}
                  </label>
                  <input
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white text-black dark:text-white dark:bg-slate-600 rounded text-sm border-0 shadow outline-none w-full"
                    id="name"
                    type="text"
                    {...form.getFieldProps('name')}
                    placeholder={t('ContactForm.Name')}
                  />
                  {form.touched.name && form.errors.name && (
                    <div className="flex">
                      <span className="text-red-500">{form.errors.name}</span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    {t('ContactForm.Email')}
                  </label>
                  <input
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white text-black dark:text-white dark:bg-slate-600 rounded text-sm border-0 shadow outline-none w-full"
                    id="email"
                    type="email"
                    {...form.getFieldProps('email')}
                    placeholder={t('ContactForm.Email')}
                  />
                  {form.touched.email && form.errors.email && (
                    <div className="flex">
                      <span className="text-red-500">{form.errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    {t('ContactForm.Message')}
                  </label>
                  <textarea
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white text-black dark:text-white dark:bg-slate-600 rounded text-sm border-0 shadow outline-none w-full"
                    id="message"
                    {...form.getFieldProps('message')}
                    placeholder={t('ContactForm.Message')}
                  ></textarea>
                  {form.touched.message && form.errors.message && (
                    <div className="flex">
                      <span className="text-red-500">{form.errors.message}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                disabled={form.isSubmitting}
                onClick={() => setShowModal(false)}
              >
                {t('ContactForm.Close')}
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-25"
                type="button"
                onClick={() => form.handleSubmit()}
                disabled={form.isSubmitting}
              >
                {!form.isSubmitting && <span className="indicator-label"> {t('ContactForm.Send')}</span>}
                {form.isSubmitting && (
                  <span className="flex">
                    {t('ContactForm.Send')}
                    <FaSpinner className="ms-2 animate-spin mt-1" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
