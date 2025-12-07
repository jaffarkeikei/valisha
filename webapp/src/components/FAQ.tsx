import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How do I measure my wrist?',
      answer: 'Wrap a string or tape measure around your wrist. Most adults are 15-18cm.',
    },
    {
      question: 'How long until I receive it?',
      answer: 'Minutes to days.',
    },
    {
      question: 'Can I get any flag?',
      answer: 'Yes! We have all 195 country flags. Just let us know which one.',
    },
    {
      question: 'What payment do you accept?',
      answer: 'Visa, Mastercard, and PayPal.',
    },
    {
      question: 'Can I order for someone else?',
      answer: 'Absolutely. Just enter their wrist size. Makes a great gift!',
    },
  ]

  return (
    <section id="faq" className="py-20 px-6">
      <div className="kente-border w-full absolute left-0" style={{ marginTop: '-5rem' }} />
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif">
            <span className="italic text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white text-sm font-medium">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-5 pb-4 text-gray-400 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            More questions? <a href="mailto:hello@valisha.art" className="text-valisha-400 hover:text-valisha-300">hello@valisha.art</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
