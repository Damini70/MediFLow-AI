'use client';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  symptoms: z.string().min(5, 'Please enter at least 5 characters'),
});

type FormData = z.infer<typeof schema>;

export default function SymptomForm({
  onAnalyze,
  initialValue,
}: {
  onAnalyze: (data: { symptoms: string }) => void;
  initialValue?: string;
}) {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { symptoms: initialValue || '' },
  });

  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any | null>(null);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser. Try Chrome or Edge.');
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onstart = () => setListening(true);

    recognitionRef.current.onresult = (event: any) => {
      // Build transcript from results (interim + final)
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setValue('symptoms', transcript);
    };

    recognitionRef.current.onerror = (err: any) => {
      console.error('Speech recognition error', err);
      setListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current.start();
  };

  const stopListening = () => {
    try {
      recognitionRef.current?.stop();
    } catch {
      /* ignore */
    } finally {
      setListening(false);
      recognitionRef.current = null;
    }
  };

  const onSubmit = (data: FormData) => {
    onAnalyze(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded-lg shadow-md">
      <label className="block mb-2 text-lg font-semibold">Describe your symptoms:</label>
      <textarea
        {...register('symptoms')}
        className="w-full p-2 border rounded focus:outline-blue-400"
        placeholder="e.g., I have been coughing for three days with mild fever."
        rows={5}
      />
      <div className="flex items-center gap-3 mt-3">
        <button
          type="button"
          onClick={() => (listening ? stopListening() : startListening())}
          className="px-3 py-2 text-white bg-blue-500 rounded"
        >
          {listening ? 'Listening... (Click to stop)' : '[mic] Speak'}
        </button>

        <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded">
          Analyze
        </button>

        <button
          type="button"
          onClick={() => setValue('symptoms', '')}
          className="px-3 py-2 border rounded"
        >
          Clear
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        Voice input uses your browser's Speech Recognition (Chrome/Edge recommended).
      </p>
    </form>
  );
}