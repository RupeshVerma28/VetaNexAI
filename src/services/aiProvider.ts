import type { ApiConfig } from '../types/health'

export interface AIProvider { send(message: string, history: { role: string; content: string }[]): Promise<string> }
export class OpenAICompatibleProvider implements AIProvider {
  constructor(private config: ApiConfig) {}
  async send(message: string, history: {role:string;content:string}[]) {
    if (!this.config.apiKey || !this.config.endpoint || !this.config.model) throw new Error('Add an endpoint, model and API key to use API mode.')
    const response = await fetch(this.config.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.config.apiKey}` }, body: JSON.stringify({ model: this.config.model, messages: [{role:'system',content:'You provide cautious general health information only. Do not diagnose, prescribe, or replace a clinician. Recommend urgent care for emergency symptoms.'}, ...history, {role:'user',content:message}] }) })
    if (!response.ok) throw new Error(`The AI provider returned ${response.status}. Check your endpoint and configuration.`)
    const data = await response.json() as { choices?: { message?: { content?: string } }[] }
    const reply = data.choices?.[0]?.message?.content
    if (!reply) throw new Error('The provider response did not include a message.')
    return reply
  }
}
