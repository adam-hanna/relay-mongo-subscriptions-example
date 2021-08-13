import { createHTTPServers } from './http'
import { createWSServers } from './ws'
import { Server } from 'http';
import { AddressInfo } from 'net'

export type ServerSettings = {
  wsPort?: number;
  wsHost?: string;

  httpPort?: number;
  httpHost?: string;
}

export class GraphQLServer {
  constructor(settings: ServerSettings) {
    this.settings_ = settings;
    this.httpServers_ = createHTTPServers();
    this.wsServers_ = createWSServers();
  }

  listen(): void {
    this.httpServer_ = this.httpServers_?.listen(
      this.settings_.httpPort,
      this.settings_.httpHost,
      () => {
        const { address, port } = this.httpServer_?.address() as AddressInfo

        console.log(
          `HTTP server is now running on http://${address}:${port}`
        );
      }
    );

    this.wsServer_ = this.wsServers_?.listen(
      this.settings_.wsPort,
      this.settings_.wsHost,
      () => {
        const { address, port } = this.wsServer_?.address() as AddressInfo

        console.log(
          `Websocket Server is now running on ws://${address}:${port}`
        )
      });

    return
  }

  stop(): void {
    this.httpServer_?.close()
    this.wsServer_?.close()
  }

  private readonly settings_?: ServerSettings
  private readonly httpServers_: Server
  private readonly wsServers_: Server

  private httpServer_?: Server

  private wsServer_?: Server
}
